const { DB_URL } = require('../package.json').env
const mongoose = require('mongoose')

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const conn = mongoose.connection

conn.on('connected', () => {
  console.log('数据库连接成功！')
})

exports.mongoose = mongoose
