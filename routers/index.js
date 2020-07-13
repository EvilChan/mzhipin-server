const Router = require('koa-router')
const md5 = require('blueimp-md5')

const router = new Router()

const { UserModel, ChatModel } = require('../db/db_modules')

const filter = {
  password: 0,
  __v: 0
}

router.post('/register', async (ctx) => {
  try {
    const { username, password, type } = ctx.request.body
    if (!(username && password && type))
      return (ctx.body = { code: 1, msg: '输入为空' })
    const res = await UserModel.findOne({ username })
    if (res) return (ctx.body = { code: 1, msg: '此用户已存在' })
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
    ctx.body = { code: 0, data }
  } catch (err) {
    ctx.body = { code: 1, msg: '服务器错误' }
    console.error(err)
  }
})

router.post('/login', async (ctx) => {
  try {
    const { username, password } = ctx.request.body
    if (!(username && password))
      return (ctx.body = { code: 1, msg: '输入为空' })
    const user = await UserModel.findOne(
      { username, password: md5(password) },
      filter
    )
    if (!user) return (ctx.body = { code: 1, msg: '用户名或密码错误' })
    ctx.cookies.set('userid', user._id, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: false
    })
    ctx.body = { code: 0, data: user }
  } catch (err) {
    ctx.body = { code: 1, msg: '服务器错误' }
    console.error(err)
  }
})

router.post('/update', async (ctx) => {
  try {
    const userid = ctx.cookies.get('userid')
    if (!userid) return (ctx.body = { code: 1, msg: '请先登陆' })
    const { header } = ctx.request.body
    if (!header) return (ctx.body = { code: 1, msg: '头像为空' })
    const user = ctx.request.body
    const oldUser = await UserModel.findByIdAndUpdate({ _id: userid }, user)
    if (!oldUser) {
      ctx.cookies.set('userid', { maxAge: 0, httpOnly: false })
      ctx.body = { code: 1, msg: '请先登陆' }
    } else {
      const { _id, username, type } = oldUser
      ctx.body = { code: 0, data: Object.assign(user, { _id, username, type }) }
    }
  } catch (err) {
    ctx.body = { code: 1, msg: '服务器错误' }
    console.error(err)
  }
})

router.get('/user', async (ctx) => {
  try {
    const userid = ctx.cookies.get('userid')
    if (!userid) return (ctx.body = { code: 1, msg: '请先登陆' })
    const user = await UserModel.findOne({ _id: userid }, filter)
    ctx.body = { code: 0, data: user }
  } catch (err) {
    ctx.body = { code: 1, msg: '服务器错误' }
    console.error(err)
  }
})

router.get('/userlist', async (ctx) => {
  try {
    const { type } = ctx.query
    const users = await UserModel.find({ type }, filter)
    ctx.body = { code: 0, data: users }
  } catch (err) {
    ctx.body = { code: 1, msg: '服务器错误' }
    console.error(err)
  }
})

router.get('/msglist', async (ctx) => {
  try {
    const userid = ctx.cookies.get('userid')
    const userDocs = await UserModel.find()
    /* const users = {}
  userDocs.forEach(doc => {
    users[doc._id] = { username: doc.username, header: doc.header }
  }) */

    const users = userDocs.reduce((users, user) => {
      users[user._id] = { username: user.username, header: user.header }
      return users
    }, {})

    const chatMsgs = await ChatModel.find(
      {
        $or: [{ from: userid }, { to: userid }]
      },
      filter
    )
    ctx.body = { code: 0, data: { users, chatMsgs } }
  } catch (err) {
    ctx.body = { code: 1, msg: '服务器错误' }
    console.error(err)
  }
})

router.post('/readmsg', async (ctx) => {
  try {
    const { from } = ctx.request.body
    const to = ctx.cookies.get('userid')
    const { nModified } = await ChatModel.updateMany(
      { from, to, read: false },
      { read: true },
      { multi: true }
    )
    ctx.body = { code: 0, data: nModified }
  } catch (err) {
    ctx.body = { code: 1, msg: '服务器错误' }
    console.error(err)
  }
})

exports.router = router
