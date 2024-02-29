import  Jwt  from "jsonwebtoken"
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET

export const requireAuth = async (req,res,next) => {

    //verify authentication
    const {authorization} = req.headers

    if (!authorization){
        return res.status(401).json({error : 'Authorization token required'})
    }

    const token = authorization.split('')[1]

    try {
      const {_id} = Jwt.verify(token , secret)

      req.user = await User.findOne({ _id }).select('_id')
      next()

    }catch (error){
      console.log(error)
      res.status(401).json()
    }
}

//otan tha dimiourgisoue protected routes na to xreisimoupoisoi san middleware prin ta routes 
