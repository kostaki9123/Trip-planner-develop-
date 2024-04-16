import { useState ,useEffect } from 'react'
import { Box  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'


import Dashboardlayout from '../components/DashboardLayout/dashboardlayout';
import { fetchdata } from '../Redux/Slices/PointsSlice'
import { AppDispatch } from '../Redux/store'
import ItineraryMainSection from '../components/itenerary/itineraryMainSection';


const Itinerary  = () => {
  const [isPending , setisPending] = useState<boolean>(true)
  const dispatch = useDispatch<AppDispatch>()

  const firstcatchfn =  async () => {
    await dispatch(fetchdata())
     setisPending(false)
   }
   
   useEffect(() => {
      firstcatchfn()
      
   } , [])

  return (
   <Dashboardlayout>
    <Box bgColor="rgb(40,44,53)" minH="100%" display="flex" alignItems="start"  justifyContent="space-between" flexDirection="column" >
        <ItineraryMainSection isPending={isPending}/>
    </Box>
  </Dashboardlayout> 
  )
}

export default Itinerary