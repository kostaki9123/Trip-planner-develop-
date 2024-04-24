import jwt from 'jsonwebtoken'
import User from '../models/userAuthModel.js'

export const createAccessToken = (_id) => {
    const expiration = Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    return jwt.sign({_id}, "ninjadojoshifuyoshimarioluigipeachbowser" , { expiresIn: expiration })    //efiame env virable process.env.A_SECRET
  }

const createRefreshToken = (_id) => {
    const expiration = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 15)
    return jwt.sign({_id}, "cnedvin95n9ek3kci3xzlaiengjelieerngjvkf44kv", { expiresIn: expiration })   //efiame env virable process.env.A_SECRET
  }

export const loginUser =async (req,res) => {
    const {email , password} = req.body
   console.log('Email:', email , "password:" , password)
    
    try{
        User.login(email , password)
        .then(user =>  {
           const accesstoken = createAccessToken(user._id)
           const refreshtoken = createRefreshToken(user._id)
           

           res.cookie('ACTriplanner', accesstoken, { httpOnly: true, secure: true , });
           res.cookie('RFTriplanner', refreshtoken, { httpOnly: true, secure: true , });

           res.status(200).json({
            Email:user.email,
            fullname:user.fullname,
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

export const logoutUser = async (req, res) => {
    try {
        // Clear cookies containing JWT tokens
        res.clearCookie('ACTriplanner');
        res.clearCookie('RFTriplanner');
        
        console.log("log out")
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}