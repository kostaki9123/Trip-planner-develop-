import express from 'express' 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"
import userRoutes from "./routes/userAuth.js"
import { createpoint ,getpoints , deletepoint , updatepoint, movepoint , createpointbetwwen} from './controllers/pointController.js';
import { requireAuth } from './middleware/requireAuth.js';
import { logoutUser } from './controllers/userAuthController.js';
import cookieParser from 'cookie-parser';
import  Jwt  from "jsonwebtoken"
import User from "./models/userAuthModel.js";

const app = express()

app.use(cors({
  origin: 'https://yourfrontenddomain.com', // Replace with your frontend domain
  credentials: true // Allow credentials (cookies)
}));

// Handle CORS preflight requests (OPTIONS) for specific routes
app.options('*', cors());

dotenv.config();

const port = process.env.PORT

app.use(express.json())



//public routes
app.use("/api/user" , userRoutes )

//middleware
app.use( requireAuth )

// points routes
app.post("/createpoint" , createpoint )
app.get("/getpoints" , getpoints )
app.delete("/deletepoint/:id", deletepoint) 
app.put("/updatepoint" , updatepoint )
app.put("/movepoint" , movepoint )
app.post("/createpointbetwwen" , createpointbetwwen )
app.post('/logout', logoutUser);
app.get('/',async (req, res) => {
  app.use(cookieParser());

  const rawHeaders = req.rawHeaders;
  const Accesssecret = process.env.A_SECRET
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
  try{
    const {_id } = Jwt.verify(accesstoken , Accesssecret)

    const user = await User.findById(_id)
    return  res.status(200).json({
     Email:user.email,
     fullname:user.fullname,
  })
  }
  catch(err){
    console.log(err)
  }

});


mongoose.connect("mongodb://localhost:27017")
    .then(() => {
      app.listen(5000, () => {
        console.log(`Server is listening at http://localhost:5000`)   //env efiamento port
      });
    })
    .catch((error) => {
      console.log(error)
    })

