import  express  from "express";

//import controllers
import { singupUser } from "../controllers/userAuthController.js";
import { loginUser } from "../controllers/userAuthController.js";
import { createpoint } from "../controllers/pointController.js";


const router = express.Router()

//login
router.post('/login', loginUser)

//singUp
router.post('/signup', singupUser)

//create point
router.post('/createpoint', createpoint )


export default router
