const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const logInSchema = new mongoose.Schema({
    name: { type: String, requried: true},
    password:{type : String,requried:true}
})

const LogInCollection=new mongoose.model('LogCollection',logInSchema)

module.exports=LogInCollection