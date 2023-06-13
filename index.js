const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  username: String,
  password: String
});

const Datas = mongoose.model('Data', dataSchema);
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('templates'))
app.get('/', (req, res) => {
     res.sendFile(__dirname +'/tempelates/signup.html');
})
app.post('/submit', async (req, res) => {
    const { username, password } = req.body;
    const newData = new Datas({
      username,
      password
    });
   console.log(newData);
      await newData.save();
res.send("saved");
      
  });
app.post('/login', async (req, res) => {
        const check = await LogInCollection.findOne({ name: req.body.name })
        if (check.password === req.body.password) {
            res.status(201).render("home")
        }

        else {
            res.send("incorrect password")
        }
})
app.listen(5000 ,() => {
    console.log('port connected');
})