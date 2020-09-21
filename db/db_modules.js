const { mongoose } = require('./db_conn')

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  header: { type: String },
  post: { type: String },
  info: { type: String },
  company: { type: String },
  salary: { type: String }
})
const UserModel = mongoose.model('user', userSchema)

const chatSchema = mongoose.Schema({
  from: { type: String }, // 发件人
  to: { type: String, required: true }, // 收件人
  chat_id: { type: String, required: true }, // 发件人和收件人组合的id
  content: { type: String, required: true }, // 内容
  read: { type: Boolean, default: false }, // 是否已读
  create_time: { type: Number } // 时间戳
})
const ChatModel = mongoose.model('chat', chatSchema)

exports.UserModel = UserModel
exports.ChatModel = ChatModel
