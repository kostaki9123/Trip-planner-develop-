import Point from '../models/pointModel.js'

export const createpoint = async (req,res) => {
        const {type} = req.body
    
    try{
        if(type === "movingbox"){

        const newPoint = new Point({
            type : req.body.type ,
            startdate : req.body.startdate , 
            index : req.body.index , 
            time : req.body.time , 
            moveIcon : req.body.moveIcon,
            to : req.body.to.name ,
            from : req.body.from.name ,
        })

        newPoint.save()

        res.status(200).json(newPoint)  
    }else{
        const newPoint = new Point({
            type : req.body.type ,
            index : req.body.index , 
            startdate : req.body.startdate,
            enddate : req.body.enddate || null , 
            location : req.body.location.name,
            mapos : req.body.location.geometry.location
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
        const points = await Point.find({}).sort({index : 1 })

        res.status(200).json(points);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const deletepoint = async (req, res) => {
      const pointid = req.params.id
      
    try {
        const PointToDeleted = await Point.findById(pointid)

        const indexOfdeleted = PointToDeleted.index

        await Point.updateMany(
            { index: { $gt: indexOfdeleted} },
            { $inc: { index: -1 } }
        );

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
    const newpoint = req.body
    const  {_id}  = newpoint
    console.log("update req came")
    try {
        const newpoints = await Point.findByIdAndUpdate(_id, newpoint)
        //return all new points
        res.status(200).json(newpoints);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const movepoint = async (req, res) => {
    const { fromindex, toindex } = req.body;

    console.log("Came to backend:", fromindex, toindex);

    try {
        if (fromindex === toindex) {
            return res.status(200).json("Properties fromindex and toindex are the same");
        }

        let docToMove = await Point.findOne({ index: fromindex });

        console.log("DocToMove:",docToMove)

        if (!docToMove) {
            return res.status(404).json("Point not found");
        }

        if (fromindex < toindex) {
            await Point.updateMany(
                { index: { $gt: fromindex, $lte: toindex } },
                { $inc: { index: -1 } }
            );
        } else {
            await Point.updateMany(
                { index: { $lt: fromindex, $gte: toindex } },
                { $inc: { index: 1 } }
            );
        }

       const doume = await Point.updateOne({ _id: docToMove._id }, { $set: { index: toindex } })

      

      return res.status(200).json("Successfully moved point");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

//create point between

export const createpointbetwwen = async (req,res) => {
    const {type} = req.body
    const {index} = req.body

try{

    await Point.updateMany(
        { index: { $gte: index} },
        { $inc: { index: 1 } }
    );
    //update all doc index +1 which index >= the new ones

    if(type === "movingbox"){
    const newPoint = new Point({
        type : req.body.type ,
        startdate : req.body.startdate , 
        index : req.body.index , 
        time : req.body.time , 
        moveIcon : req.body.moveIcon,
        to : req.body.to.mame ,
        from : req.body.from.name ,
    })

    newPoint.save()

    res.status(200).json(newPoint)  
}else{
    const newPoint = new Point({
        type : req.body.type ,
        index : req.body.index , 
        startdate : req.body.startdate,
        enddate : req.body.enddate || null , 
        location : req.body.location.name,
        mapos : req.body.location.geometry.location,
    })
    newPoint.save()
    
    res.status(200).json(newPoint)     
}
}catch(err){
console.log("Erorr:" , err)
res.status(500).json({ error: 'Internal Server Error' });
}
}


