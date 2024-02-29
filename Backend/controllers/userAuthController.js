import jwt from 'jsonwebtoken'
import User from '../models/userAuthModel.js'

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
  }

export const loginUser =async (req,res) => {
    const {email , password} = req.body
   console.log('Email:', email , "password:" , password)
    
    try{
        const user = User.login(email , password)

        const token = createToken(user._id)

        res.status(200).json({"Email" :email , token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export const singupUser =async (req,res) => {
    const {email , password} = req.body  
    
    try{
        const user = User.singup(email , password)

        const token = createToken(user._id)

        res.status(200).json({email , token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}