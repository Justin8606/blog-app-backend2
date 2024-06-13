const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const bcrypt = require("bcryptjs")        //imported bcryptjs

const {blogModel} = require("./models/blog")

mongoose.connect("mongodb+srv://justin:nitsuj21@cluster0.3jf2qw3.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0") //next is save


const app = express()


app.use(cors())
app.use(express.json())

const generateHashedPassword = async (password)=>{      //password hashing       
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

app.post("/signup",async (req,res)=>{
    // res.json({"status":"success"})
    let input = req.body
    let hashedPassword = await generateHashedPassword(input.password)
    input.password = hashedPassword //if not this password then it will be plain text
    console.log(hashedPassword)
    let blog = new blogModel(input)
    blog.save()
    
    // res.send("signup")
    res.json({"status":"success"})      
})

app.listen(8080,()=>{
    console.log("Server is running")
})