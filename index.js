const express = require("express")

const app = express()

const Data = require("./mongodb")

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(express.static('templates'))
app.get('/', (req, res) => {
     res.sendFile(__dirname +'/tempelates/signup.html');
})


app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const newData = new Data({
      username,
      password
    });
   
      await newData.save();
      res.send('Data saved successfully');   
})
app.post('/login', async (req, res) => {
        const check = await LogInCollection.findOne({ name: req.body.name })
        if (check.password === req.body.password) {
            res.status(201).render("home")
        }

        else {
            res.send("incorrect password")
        }
})
app.listen(9085 ,() => {
    console.log('port connected');
})