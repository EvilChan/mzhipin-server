const Router = require('koa-router')
const md5 = require('blueimp-md5')

const router = new Router({
  prefix: '/api'
})

const { UserModel } = require('../db/db_modules')

const filter = {
  password: 0,
  __v: 0
}

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
    const res = await UserModel.findOne({ username })
    if (res) {
      ctx.body = formatData(1, '此用户已存在')
    } else {
      const user = await new UserModel({
        username,
        type,
        password: md5(password)
      }).save()
      ctx.cookies.set('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 * 7 })
      const data = { username, type, _id: user._id }
      ctx.body = formatData(0, data)
    }
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
    console.error(err)
  }
})

router.post('/login', async (ctx, next) => {
  try {
    const { username, password } = ctx.request.body
    const user = await UserModel.findOne(
      { username, password: md5(password) },
      filter
    )
    if (user) {
      ctx.cookies.set('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 * 7 })
      ctx.body = formatData(0, user)
    } else {
      ctx.body = formatData(1, '用户名或密码错误')
    }
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
    console.error(err)
  }
})

exports.router = router
