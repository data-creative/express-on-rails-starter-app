var db = require("../../db");

var Robot = db.Model.extend({
  tableName: 'robots'//,
  //hasTimestamps=true
});

//module.exports = db.model('Robot', Robot);

exports.db = db;
exports.Robot = db.model('Robot', Robot);
