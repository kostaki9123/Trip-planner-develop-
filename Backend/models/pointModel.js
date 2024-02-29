import mongoose from "mongoose"

const Schema = mongoose.Schema

const pointSchema = new Schema ({
    type: {
        type: String,
        required: true,
      },
    index: {
        type: Number,
        required: true,
      },
    startdate: {
        type: String,
        required: true
      },
    location: {
        type: String,
        required: false,
      },
    moveIcon: {
        type: String,
        required: false
      },
    time: {
        type: String,
        required: false
      },
    enddate: {
      type : String || null ,
      require : false
    },
    to: {
       type: String,
       required: false
    },
    from: {
       type: String,
       required: false
    }
    
})

export default mongoose.model('Point', pointSchema)