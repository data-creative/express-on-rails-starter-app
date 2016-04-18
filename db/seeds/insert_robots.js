var Robot = require("../../app/models/robot");

exports.seed = function(knex, Promise) {
    var promises = [];
    var robots = [
        {name:"c3po", description:"specializes in language translation"},
        {name:"r2d2", description:"holds a secret message"},
        {name:"bb8",  description:"rolls around"}
    ];

    // destroy all records in the table...

    //var destruction_promise = Robot.destroy()
    //    .then(function(bots){
    //        console.log("DESTROYED"+bots.count()+"ROBOTS")
    //    })
//
    //promises.push(destruction_promise);

    // add a new record for each robot...

    //robots.forEach(function(robot){

// .fetch().then(function() { //...
// .then(function() { //...

        //Robot.where(name: robot["name"])
        //    .then(function(bot){
        //    })

        //Robot.where(name: robot["name"]).fetch().then(function(bot){
        //    if (bot.isNew()) {
        //        bot.save(description: robot["desctiption"])
        //            .then()
        //    }
        //})

        //var insertion_promise = new Robot({name: robot["name"]}).save().then(function(bot) {
        //    console.log(bot)
        //    console.log('CREATED ROBOT:', bot.get('name'));
        //});
        //promises.push(insertion_promise);
    //})

    //var insertion_promise = Robot.forge(robots)
    //    .save()
    //    .then(function(bots){
    //        console.log("CREATED"+bots.length()+"ROBOTS")
    //    });

    var insertion =

    Robot.where({})

    console.log

    promises.push(insertion);
    return Promise.all(promises);
};
