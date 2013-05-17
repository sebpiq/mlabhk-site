var express = require('express')
  , path = require('path')
  , config = require('../config')

exports.start = function(app, callback) {

  // add some locals that we can use in the templates
  app.locals.static = config.static

  app.configure(function() {
    app.set('port', config.server.port)
    app.set('views', path.join(config.root, 'templates'))
    app.set('view engine', 'hbs')
    app.use(express.favicon())
    app.use(express.logger('dev'))
    app.use(express.bodyParser())
    app.use(express.methodOverride())
    app.use(express.cookieParser(config.server.secret))
    app.use(express.session())
    app.use(express.static(path.join(config.root, 'public')))
    app.use(app.router)
  })

  app.get('/', function(req, res) {
    res.render('index', {})
  })

  callback(null)
}
