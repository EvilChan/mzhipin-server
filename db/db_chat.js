const { mongoose } = require('./db_conn')

const chatSchema = mongoose.Schema({
  from: { type: String },
  to: { type: String, required: true },
  chat_id: { type: String, required: true },
  content: { type: String, required: true },
  read: { type: Boolean, default: false },
  create_time: { type: Number }
})

module.exports = mongoose.model('chat', chatSchema)
