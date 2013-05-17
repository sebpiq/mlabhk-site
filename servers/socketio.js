var socketio = require('socket.io')

exports.start = function(io, callback) {

  //io.on('connection', function(){ // … });

  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' })
    socket.on('my other event', function (data) {
      console.log(data)
    })
  })

  callback(null)

}
