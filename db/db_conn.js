require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const conn = mongoose.connection

conn.on('connected', () => {
  console.log('数据库连接成功！')
})

exports.mongoose = mongoose
