import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import signupModel from './models/signupSchema.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 2009
const DBURI = 'mongodb+srv://fahad_DB:fahad123@mongodb.1vls1.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB'

mongoose.connect(DBURI)
mongoose.connection.on('connected',()=>console.log('MongoDB connected...'))
mongoose.connection.on('error',(err)=>console.log('MongoDB error...',err))


//Getting and saving data from Signup using Post
app.post('/signup',async (req,res)=>{
    const {fullName,email,password} = req.body
    const userAccountData = {
        fullName,
        email,
        password
    }
    const addDataInDb = await signupModel.create(userAccountData)
    res.send('User Data Added in Database')
})
//

//Getting and saving data from Login using Post
app.post('/login',async (req,res)=>{
    const {email,password} = req.body
    
   signupModel.findOne({email: email,password: password})
  .then((response)=>{
    

      if(response){
        res.send('User exists')
     }else{
        res.send('User does not exists');        
     }
     
  }).catch((err)=>{
    console.log('Error',err);
    
  })
    
})































//Starting Server
app.listen(PORT, () => {
    console.log(`Server Started`);
})
//
app.get('/',(req,res)=>{
    res.send('Server Started')
})
