import express from 'express' 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"
import userRoutes from "./routes/userAuth.js"
import { createpoint ,getpoints , deletepoint , updatepoint, movepoint , createpointbetwwen} from './controllers/pointController.js';


const app = express()

app.use(cors())

dotenv.config();

const port = process.env.PORT

//app.use((req, res, next) => {
//  console.log("exume req");
//  next(); // Call next to pass the request to the next middleware or route handler
//});

app.use(express.json())

app.get('/', (req, res) => {

  res.send('Hello, World!');
});

//routes
app.use("/api/user" , userRoutes )


// points routes
app.post("/createpoint" , createpoint )
app.get("/getpoints" , getpoints )
app.delete("/deletepoint/:id", deletepoint) 
app.put("/updatepoint" , updatepoint )
app.put("/movepoint" , movepoint )
app.post("/createpointbetwwen" , createpointbetwwen )


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
      });
    })
    .catch((error) => {
      console.log(error)
    })

