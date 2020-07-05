// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/mzhipin_test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// const conn = mongoose.connection

// conn.on('connected', () => {
//   console.log('数据库连接成功！')
// })

// const userSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   type: {
//     type: String,
//     required: true
//   },
//   header: {
//     type: String
//   }
// })

// const UserModel = mongoose.model('user', userSchema)

const { UserModel } = require('./db_modules')

const testSave = () => {
  const userModel = new UserModel({
    username: 'Bob',
    password: '234',
    type: 'dashen'
  })
  userModel.save((err, product) => {
    console.log('save()', err, product)
  })
}

// testSave()

const testFind = () => {
  UserModel.find({ username: 'Bob' }, (err, res) => {
    console.log('find()', err, res)
  })

  UserModel.findOne({ _id: '5f006904aa05250cf4b231a7' }, (err, res) => {
    console.log('findOne()', err, res)
  })
}

testFind()

const testUpdate = () => {
  UserModel.updateOne(
    { _id: '5f006904aa05250cf4b231a7' },
    { username: 'Jack1' },
    (err, raw) => {
      console.log('update()', err, raw)
    }
  )
}

// testUpdate()

const testDelete = () => {
  // UserModel.findOneAndRemove(
  //   { _id: '5f005b01c3d8bf05fc0645ec' },
  //   (err, raw) => {
  //     console.log('remove()', err, raw)
  //   }
  // )
  UserModel.findByIdAndDelete('5f006904aa05250cf4b231a7', (err, res) => {
    console.log('findByIdAndDelete()', err, res)
  })
}

// testDelete()
