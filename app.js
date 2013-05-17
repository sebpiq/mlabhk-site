var async = require('async')
  , express = require('express')
  , socketio = require('socket.io')
  , server = require('http').Server()
  , expressServ = require('./servers/express')
  , socketIoServ = require('./servers/socketio')
  , config = require('./config')
  , app = express()
  , server = require('http').createServer(app)
  , io = socketio.listen(server)

async.series([

  function(next) {
    console.log('starting express server ...')
    expressServ.start(app, next)
  },

  function(next) {
    console.log('starting socket.io server ...')
    socketIoServ.start(io, next)
  }

], function(err, results) {
  if (err) throw err
  else {
    console.log('all ready')
    server.listen(config.server.port)
    console.log('server listening on port ' + config.server.port)
  }
})
