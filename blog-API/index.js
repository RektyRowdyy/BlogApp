const express = require('express')
const cors = require('cors');
const { mongoose } = require('mongoose');
const User = require('./models/user.model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

var salt = bcrypt.genSaltSync(10);
const secret = 'asdjuljlhgg562'

const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(express.json())

mongoose.connect('mongodb+srv://rektyrowdy:svfWokjKWxbwhovg@cluster0.y8jfgg0.mongodb.net/')

app.post("/register", async (req,res) => {

    const {username,password} = req.body

    try {

        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password,salt)
        })

        res.json(userDoc);
        
    } catch (e) {
        res.status(400).json(e.message)
    }

})

app.post("/login", async (req,res) => {

    const {username, password} = req.body
            
    const userDoc = await User.findOne({
        username
    })

    const passOk = bcrypt.compareSync(password,userDoc.password)

    if(passOk) {
        //logged In
        jwt.sign(
            {
                username,
                id: userDoc._id
            }, 
            secret, 
            {}, 
            (error,token) => {
                if(error) {
                    throw error
                }
                res.cookie('token', token).json('ok')
            }
        )
    }
    else {
        res.status(400).json("wrong credentials")
    }
})

app.listen(4000, () => {
    console.log(`Server listening on PORT 4000`);
})

//mongodb+srv://rektyrowdy:<svfWokjKWxbwhovg>@cluster0.y8jfgg0.mongodb.net/