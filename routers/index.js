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

router.post('/register', async (ctx) => {
  try {
    const { username, password, type } = ctx.request.body
    if (!(username && password && type))
      return (ctx.body = formatData(1, '输入为空'))
    const res = await UserModel.findOne({ username })
    if (res) return (ctx.body = formatData(1, '此用户已存在'))
    const user = await new UserModel({
      username,
      type,
      password: md5(password)
    }).save()
    ctx.cookies.set('userid', user._id, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: false
    })
    const data = { username, type, _id: user._id }
    ctx.body = formatData(0, data)
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
    console.error(err)
  }
})

router.post('/login', async (ctx) => {
  try {
    const { username, password } = ctx.request.body
    if (!(username && password)) return (ctx.body = formatData(1, '输入为空'))
    const user = await UserModel.findOne(
      { username, password: md5(password) },
      filter
    )
    if (!user) return (ctx.body = formatData(1, '用户名或密码错误'))
    ctx.cookies.set('userid', user._id, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: false
    })
    ctx.body = formatData(0, user)
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
    console.error(err)
  }
})

router.post('/update', async (ctx) => {
  try {
    const userid = ctx.cookies.get('userid')
    if (!userid) return (ctx.body = formatData(1, '请先登陆'))
    const { header } = ctx.request.body
    if (!header) return (ctx.body = formatData(1, '头像为空'))
    const user = ctx.request.body
    const oldUser = await UserModel.findByIdAndUpdate({ _id: userid }, user)
    if (!oldUser) {
      ctx.cookies.set('userid', { maxAge: 0, httpOnly: false })
      ctx.body = formatData(1, '请先登陆')
    } else {
      const { _id, username, type } = oldUser
      ctx.body = formatData(0, Object.assign(user, { _id, username, type }))
    }
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
    console.error(err)
  }
})

router.get('/user', async (ctx) => {
  try {
    const userid = ctx.cookies.get('userid')
    if (!userid) return (ctx.body = formatData(1, '请先登陆'))
    const user = await UserModel.findOne({ _id: userid }, filter)
    ctx.body = formatData(0, user)
  } catch (err) {
    ctx.body = formatData(1, '服务器错误')
    console.error(err)
  }
})

exports.router = router
