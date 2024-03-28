import { Box , Modal, Stack , Spinner, Flex} from '@chakra-ui/react'
import { useEffect, useState ,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import Point from '../components/createbox/point'
import Uniteline from '../components/createbox/Unitedline'
import Movingbox from '../components/createbox/movingbox'
import AddModal from '../components/createbox/addModal'
import Form from '../components/createbox/form/form'
import { AppDispatch, RootState } from '../Redux/store'
import FirstAddModal from '../components/createbox/form/firstAddModal'
import  { Tpoint }  from '../Redux/Slices/PointsSlice'
import { fetchdata } from '../Redux/Slices/PointsSlice'
import App from '../components/createbox/GoogleMap/mainmap'

interface Coordinates {
  lat: number;
  lng: number;
}

type TpositionForMap = Coordinates[]

const Createtrip  = () => {
   const allpoints = useSelector((state : RootState) => state.points)
   let [positionForMap , setPositionForMap] = useState<TpositionForMap>([])
   const [isPending , setisPending] = useState<boolean>(true)

   const dispatch = useDispatch<AppDispatch>()

   console.log(allpoints)

  const firstcatchfn =  async () => {
    try{
     await dispatch(fetchdata())
      setisPending(false)
    }
    catch(error){
      console.error('An error occurred:', error);
    }
    }
  
  useEffect(() => {
    
     firstcatchfn()
     
  } , [])

   
    
    
     

  return (

    <>
    <Box  bgColor="rgb(40,44,53)" h="100%" pos="relative" display="grid" gridTemplateColumns="70px repeat(9, 132px)" gridTemplateRows="49px 69px">
          { isPending ? 
          <Flex position="absolute" top="10%" left="47%" > 
            <Spinner size='xl' />
          </Flex> : 
          (
          allpoints?.length === 0 ? 
          ( <FirstAddModal/> )
          : (
            allpoints?.map(( point : Tpoint, key : number) => (
              point.type === "point" 
              ? <Point key={key} index={key} datalenght={allpoints.length} data={point} />
              : <Movingbox key={key} index={key} datalenght={allpoints.length} data={point}/>
              ))
            )
           )
          }
         <App position="absolute"/>
    </Box> 
    </>
  )
}

export default Createtrip