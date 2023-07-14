const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/inter')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  username: String,
  password: String
});

const Datasa = mongoose.model('Data', dataSchema);
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('tempelates'));

app.get('/', (req, res) => {
     res.sendFile(__dirname +'/tempelates/login.html');
})
app.post('/submit', async (req, res) => {
    const { username, password } = req.body;
    const newData = new Datasa({
      username,
      password
    });
   
      await newData.save();
       let data = await Datasa.find();
        res.send('saved');

      
  });
app.post('/login', async (req, res) => {
        const check = await Datasa.findOne({ name: req.body.name })
        if (check.password === req.body.password) {
            res.send("corrrect")
        }
        else {
            res.send("incorrect password")
        }
})
app.listen(5000 ,() => {
    console.log('port connected');
})
