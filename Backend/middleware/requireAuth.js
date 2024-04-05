import  Jwt  from "jsonwebtoken"
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express from 'express' 
import User from "../models/userAuthModel.js";
import { createAccessToken } from "../controllers/userAuthController.js";

dotenv.config();

const Accesssecret = process.env.A_SECRET

const Refreshsecret = process.env.R_SECRET

const app = express()

export const requireAuth = async (req,res,next) => {

    app.use(cookieParser());

    const rawHeaders = req.rawHeaders;
    let cookies = {};
    for (let i = 0; i < rawHeaders.length; i += 2) {
      if (rawHeaders[i].toLowerCase() === 'cookie') {
        const cookieHeader = rawHeaders[i + 1];
        const cookiePairs = cookieHeader.split(';');
        cookiePairs.forEach(pair => {
          const [name, value] = pair.trim().split('=');
          cookies[name] = value;
        });
      }
    }

    
    const accesstoken = cookies.ACTriplanner
    const refreshtoken = cookies.RFTriplanner

    if (!accesstoken && !refreshtoken){
      return res.status(401).json({error : 'Authorization token required'})
   }
    
   try{
       const {_id , exp} = Jwt.verify(accesstoken , Accesssecret)

       const currentTimeInSeconds = Math.floor(Date.now() / 1000);

       const user = await User.findById(_id)
       
      if (exp <= currentTimeInSeconds) {
         const refreshtoken2 = Jwt.verify(refreshtoken ,Refreshsecret)
           if(refreshtoken2.exp <= currentTimeInSeconds){
            console.error("Refresh token has expired");
            return res.status(401).json({ error: 'Refresh token has expired' });
           }

          const userfindbyrefresh = await User.findById(refreshtoken2._id)

          if (userfindbyrefresh){
            const newaccesstoken =  createAccessToken(_id)

            res.cookie('ACTriplanner', newaccesstoken, { httpOnly: true, secure: true , });
            res.status(401).json("current user:" , user);
            next()
          }
      
         console.error("Both tokens has expired or invalid");
         return res.status(401).json({ error: 'Both tokens has expired or invalid' });
       }

      if (!user) {
        console.error("Not found user with that Accesstoken");
        return res.status(401).json({ error: 'Not found user with that Accesstoken' });
      }
     
       next()
   }catch(err){
    console.log(err)
    res.status(401).json()
   }
   
 

    //if not somehow access refresh token 
    //verify and create and send access token

    //if not verify refresh token authorize and log in
 
}

