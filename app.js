require('dotenv').config()
const Koa = require('koa')

const app = new Koa()

const { router } = require('./routers')

const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(router.routes())

app.listen(PORT, HOST, () => {
  console.log(`server start: http://${HOST}:${PORT}`)
})
