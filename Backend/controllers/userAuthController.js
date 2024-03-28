import jwt from 'jsonwebtoken'
import User from '../models/userAuthModel.js'

const createAccessToken = (user) => {
    return jwt.sign({user}, process.env.A_SECRET, { expiresIn: "1d" })
  }

const createRefreshToken = (_id) => {
    return jwt.sign({_id}, process.env.R_SECRET, { expiresIn: '15d' })
  }

export const loginUser =async (req,res) => {
    const {email , password} = req.body
   console.log('Email:', email , "password:" , password)
    
    try{
        User.login(email , password)
        .then(user =>  {
           const accesstoken = createAccessToken(user)
           const refreshtoken = createRefreshToken(user._id)
           
           res.status(200).json({
            Email:user.email,
            fullname:user.fullname,
            accesstoken: accesstoken,
            refreshtoken : refreshtoken,
         })
           })
        .catch(error => {
            res.status(201).json({error: error.message})  
            })

    }catch(error){
        res.status(400).json({error: error.message})
    }
}




export const singupUser = (req,res) => {
    const {email , password , fullname} = req.body  
    
    try{
        User.singup(email , password ,fullname)
        .then(user =>  {
        const token = createToken(user._id)
       
        res.status(200).json({email, fullname ,token})
        })
        .catch(error => {
        res.status(201).json({error: error.message})  
        })
       
    }catch(error){
        if (error instanceof Error){
        res.status(400).json({error: error.message})
        }else{

         res.status(400).json({ error });   
        }
    }
}