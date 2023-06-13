const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  username: String,
  password: String
});

const Datas = mongoose.model('Data', dataSchema);
module.exports= Datas