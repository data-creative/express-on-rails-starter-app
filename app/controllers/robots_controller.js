var express = require('express');
var router = express.Router();

var Robot = require("../models/robot");
var mongooseError = require("../helpers/mongoose_error")

var create_robot_path = '/robots/';

function updateRobotPath(robot_id){
    return '/robots/'+robot_id+'/update';
};

/* INDEX */

router.get('/robots', function(req, res, next) {
    Robot.find( function (err, bots) {
      console.log("LIST", bots.length, "ROBOTS:", bots);
      res.render('robots/index', {
          page_title: 'Robots',
          robots: bots.reverse()
      });
    });
});

/* CREATE */

router.post('/robots', function(req, res, next) {
    console.log("CAPTURE FORM DATA:", req.body)
    var robot_name = req.body.robotName;
    var robot_description = req.body.robotDescription;
    var bot = new Robot({name: robot_name, description: robot_description});
    bot.save(function(saveErr, bot_id) {
        if (saveErr){
            console.log(saveErr);
            var error_messages = mongooseError.toMessages(saveErr);
            req.flash('danger', error_messages);
            res.render('robots/new', {
                page_title: 'Add a new Robot',
                form_action: create_robot_path,
                robot: {name: robot_name, description: robot_description} // pass-back attempted values to the form in case one was not blank
            });
        } else {
            console.log("CREATE ROBOT", bot)
            req.flash('info', 'Created a New Robot named '+robot_name );
            res.redirect('/robots')
        };
    });
});

/* NEW */
// this must come above the SHOW action else express will think the word 'new' is the :id

router.get('/robots/new', function(req, res, next) {
    console.log("NEW ROBOT")
    res.render('robots/new', {
        page_title: 'Add a new Robot',
        form_action: create_robot_path
    });
});

/* SHOW */

router.get('/robots/:id', function(req, res, next) {
    var robot_id = req.params.id;
    Robot.findById(robot_id, function(err, bot) {
        if (err){
            console.log("COULDN'T SHOW ROBOT #"+robot_id);
            console.log(err);
            var error_messages = mongooseError.toMessages(err);
            req.flash('danger', error_messages);
            res.redirect('/robots');
        } else {
            console.log("SHOW ROBOT:", bot);
            res.render('robots/show', {
                page_title: 'Robot #'+bot.id,
                robot: bot
            });
        };
    });
});

/* EDIT */

router.get('/robots/:id/edit', function(req, res, next) {
    var robot_id = req.params.id;
    Robot.findById(robot_id, function(err, bot) {
        console.log("EDIT ROBOT", bot);
        res.render('robots/edit', {
            page_title: 'Edit Robot #'+bot.id,
            robot: bot,
            form_action: updateRobotPath(bot.id)
        });
    });
});

/* UPDATE */

router.post('/robots/:id/update', function(req, res, next) {
    console.log("CATURED FORM DATA", req.body)
    var robot_id = req.params.id;
    var robot_name = req.body.robotName;
    var robot_description = req.body.robotDescription;
    Robot.findById(robot_id, function(err, bot) {
        bot.name = req.body.robotName
        bot.description = req.body.robotDescription
        bot.save(function(saveErr, new_bot) {
            if (saveErr){
                console.log(saveErr)
                var error_messages = mongooseError.toMessages(saveErr)
                req.flash('danger', error_messages);
                res.render('robots/edit', {
                    page_title: 'Edit Robot #'+robot_id,
                    form_action: updateRobotPath(robot_id),
                    robot: {name: robot_name, description: robot_description} // pass-back attempted values to the form in case one was not blank
                });
            } else {
                console.log("UPDATED ROBOT", new_bot)
                req.flash('success', 'Updated Robot #'+new_bot._id );
                res.redirect('/robots')
            };
        });
      });
});

/* DESTROY */

router.post('/robots/:id/destroy', function(req, res, next) {
    var robot_id = req.params.id;
    Robot.findById(robot_id, function(err, bot) {
        bot.remove( function(rmErr, removed_bot) {
            if (rmErr) {
                console.log("COULDN'T DELETE ROBOT #", bot_id);
                req.flash('danger', "Couldn't delete Robot #"+bot_id );
                var error_messages = mongooseError.toMessages(rmErr);
                req.flash("danger", error_messages)
            } else {
                console.log("DELETED ROBOT", removed_bot);
                req.flash('success', 'Deleted Robot #'+removed_bot._id );
            }
            res.redirect('/robots');
        });
    });
});

module.exports = router;
