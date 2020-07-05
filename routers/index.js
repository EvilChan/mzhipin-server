const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})

const formatData = (...data) => {
  const res = {}
  data.map((value) => {
    if (typeof value === 'number') res.code = value
    if (typeof value === 'string') res.msg = value
    if (typeof value === 'object') res.data = value
  })
  return res
}

router.post('/register', async (ctx, next) => {
  try {
    const { username, password, type } = ctx.request.body
    ctx.body = formatData(0, { username, password, type })
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
  }
})

router.post('/login', async (ctx, next) => {
  try {
    const { username, password } = ctx.request.body
    ctx.body = formatData(0, { username, password })
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
  }
})

exports.router = router
