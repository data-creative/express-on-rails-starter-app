var config      = require('./db/config');
var env         = process.env.NODE_ENV || 'development';
var knex        = require('knex')(config[env]);
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry'); // use the "model-registry" plugin. https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry

module.exports = bookshelf;
