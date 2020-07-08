const { ChatModel } = require('../db/db_modules')

module.exports = function (server) {
  const io = require('socket.io')(server)

  io.on('connection', (socket) => {
    console.log('有一个客户端连接上了服务器')

    socket.on('sendMsg', async ({ from, to, content }) => {
      try {
        console.log('服务器接收客户端发送的消息：', { from, to, content })
        const create_time = Date.now()
        const chat_id = [from, to].sort().join('_') // from_to或者to_from
        const chatMsg = await new ChatModel({
          from,
          to,
          content,
          chat_id,
          create_time
        }).save()
        io.emit('receiveMsg', chatMsg)
      } catch (err) {
        console.log(err)
      }
    })
  })
}
