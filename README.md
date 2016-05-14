# Express on Rails - Starter App

This repository supports a [series of blog posts](http://data-creative.info/series/node-js-for-rails-developers/) to help *Rails* developers learn *Node.js* and *Express*.

branch | description | blog post(s) | production-ready? | production location
--- | --- | --- | --- | ---
`starter` | A basic navigable app.| [Part 2](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-2-node-and-express/) </br>  [Part 3](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-3-express-configuration/)</br>[Part 4](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-4-express-controllers/)</br>[Part 5](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-5-express-views/) | false | N/A
`knex` | A basic *PostgreSQL*-connected app. | [Part 6a](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-6a-express-postgresql-datastore/) | false | N/A
`mongo` | A basic *MongoDB*-connected app.  | [Part 6b](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-6b-express-mongodb-datastore/) | false | N/A
`knex-deploy` | A production-ready *PostgreSQL*-connected app. | [Part 7](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-7-deploying-node-app-to-heroku/) | true | https://express-on-rails-starter.herokuapp.com/
`mongo-deploy` | A production-ready *MongoDB*-connected app. | [Part 7](http://data-creative.info/process-documentation/2016/04/09/node-for-rails-developers-part-7-deploying-node-app-to-heroku/) | true | https://express-on-rails-mongo.herokuapp.com/

## Contributing

### Installation

```` sh
git clone git@github.com:data-creative/express-on-rails-starter-app.git
cd express-on-rails-starter-app/
````

Checkout the relevant branch before making changes.

### Development

Compile/transpile React components into the **public/** directory with `npm run build`.

Start the development web server with `npm start`.

## Deploying

Configure remotes.

```` sh
heroku login # get collaborator access to 'express-on-rails-starter' and 'express-on-rails-mongo' and 'express-on-rails-mongo-react' heroku applications
heroku git:remote -a express-on-rails-starter
git remote rename heroku heroku-starter

heroku git:remote -a express-on-rails-mongo
git remote rename heroku heroku-mongo

heroku git:remote -a express-on-rails-mongo-react
git remote rename heroku heroku-mongo-react
````

Deploy.

```` sh
git push heroku-starter knex-deploy:master
git push heroku-mongo mongo-deploy:master
git push heroku-mongo-react mongo-deploy-react:master
````

## [License](/LICENSE.md)
