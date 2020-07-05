require('dotenv').config()
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')

const app = new Koa()

const { router } = require('./routers')

const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(json())

app.use(bodyParser())

app.use(router.routes())

app.listen(PORT, HOST, () => {
  console.log(`server start: http://${HOST}:${PORT}`)
})
