const Koa = require('koa')

const app = new Koa()

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
  console.log(`server start: http://${HOST}:${PORT}`)
})
