import { Box , Modal, Stack , Spinner, Flex} from '@chakra-ui/react'
import { useEffect, useState ,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Dashboardlayout from '../components/DashboardLayout/dashboardlayout'
import { AppDispatch,} from '../Redux/store'
import { fetchdata } from '../Redux/Slices/PointsSlice'
import CreateTripMainSection from '../components/createbox/createTripMainSection'

interface Coordinates {
  lat: number;
  lng: number;
}

const Createtrip  = () => {
   const [isPending , setisPending] = useState<boolean>(true)

   const dispatch = useDispatch<AppDispatch>()

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

    <Dashboardlayout>
      <Flex bgColor="rgb(40,44,53)" h="100%" w="100%" overflowY="hidden" overflowX="hidden" position="relative" flexDir="column" justifyContent="flex-start">
         <CreateTripMainSection isPending={isPending}/>
      </Flex> 
    </Dashboardlayout>
  )
}

export default Createtrip