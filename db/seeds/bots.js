var db = require("../../app/models/robot").db;
var Robot = require("../../app/models/robot").Robot;

var robots = [
    {name:"c3po", description:"specializes in language translation"},
    {name:"r2d2", description:"holds a secret message"},
    {name:"bb8",  description:"rolls around"}
];

console.log(Robot)

robots.forEach(function(robot){

    console.log(robot)

    Robot.where({name: robot.name}).then(function(bot){

        console.log(bot, bot.isNew())






    })
})

db.disconnect()
