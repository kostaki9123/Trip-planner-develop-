import Point from '../models/pointModel.js'

export const createpoint = async (req,res) => {
        const {type} = req.body

        console.log(req.body)
    try{
        if(type === "movingbox"){
        const newPoint = new Point({
            type : req.body.type ,
            startdate : req.body.startdate , 
            index : req.body.index , 
            time : req.body.time , 
            moveIcon : req.body.moveIcon,
            to : req.body.to ,
            from : req.body.from ,
        })

        newPoint.save()

        res.status(200).json(newPoint)  
    }else{
        const newPoint = new Point({
            type : req.body.type ,
            index : req.body.index , 
            startdate : req.body.startdate,
            enddate : req.body.enddate || null , 
            location : req.body.location ,
        })
        newPoint.save()
        
        res.status(200).json(newPoint)     
    }
  }catch(err){
    console.log("Erorr:" , err)
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const getpoints = async (req, res) => {
    try {
        const points = await Point.find({}).exec();
      
        res.status(200).json(points);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const deletepoint = async (req, res) => {
      const pointid = req.params.id
      
    try {
        const result = await Point.findByIdAndDelete(pointid)
     
        if(!result){
            return res.status(404).json({ message: "Point not found" });
        }
         
        return res.status(200).json({ message: "Point deleted successfully" });
    } catch (err) {
        console.error("erroorrr",err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updatepoint = async (req, res) => {
    const pointid = req.params.id
    const {newpoint} = req.body

    try {
        const newpoints = await Point.findByIdAndUpdate(pointid, newpoint)

        console.log(newpoints)
        //return all new points
        res.status(200).json(newpoints);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const movepoint = async (req, res) => {
    
    const {fromindex , toindex} = req.body
  
    try {
        const points = await Point.find({}).exec();
        
        const element = points[fromindex]
        points.splice(fromindex , 1)
        points.splice(toindex , 0 , element)
        console.log("finalpoints",points)

        res.status(200).json(points);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

