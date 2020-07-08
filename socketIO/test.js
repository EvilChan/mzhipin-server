module.exports = function (server) {
  const io = require('socket.io')(server)

  io.on('connection', (socket) => {
    console.log('有一个客户端连接上了服务器')

    socket.on('sendMsg', (data) => {
      console.log('服务器接收客户端发送的消息：', data)
      // 处理数据
      data.name = data.name.toUpperCase()
      // 服务器向客户端发送消息
      // socket.emit('receiveMsg', data)
      io.emit('receiveMsg', data)
      console.log('服务器向客户端发送消息：', data)
    })
  })
}
