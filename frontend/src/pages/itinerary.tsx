import { useState ,useEffect } from 'react'
import { Box , Flex, Spinner ,  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { BsThreeDots } from "react-icons/bs";


import Dashboardlayout from '../components/Dashboard/dashboardlayout';
import { Tpoint, fetchdata } from '../Redux/Slices/PointsSlice'
import { AppDispatch, RootState } from '../Redux/store'
import AccordionItenerary from '../components/itenerary/accodion';
import App from '../components/itenerary/GoogleMap/mainmap';
import Byplace from '../components/itenerary/byplace';
import Byday from '../components/itenerary/byday';
import OrderByMenu from '../components/itenerary/orderByMenu';


const Itinerary  = () => {
  const [iteneraryStatus , setIteneraryStatus] = useState<"byDay" | "byPlace">("byPlace")
  const [isPending , setisPending] = useState<boolean>(true)
  const allpoints = useSelector((state : RootState) => state.points)
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
         <Flex  w="100%"  flexDir="column">
         { isPending ? 
          <Flex position="absolute" top="45%" left="47%" > 
            <Spinner size='xl' />
          </Flex> 
          :  (
          allpoints?.length === 0 ? 
          ( <Box>Your itenerary is empty</Box> )
          : (
          <>  
               <OrderByMenu setIteneraryStatus={setIteneraryStatus}/>
               <Flex w="100%" flexDir="row" h="100%" flexWrap="wrap" > 
                   {allpoints?.map(( point : Tpoint, key : number) => (  
                     <>
                        {iteneraryStatus === "byPlace" ? (
                        // Render if iteneraryStatus is "byPlace"
                        point.type === "point" && (
                           <Byplace data={point} key={key}/>     
                          )
                        ) : (
                          // Render if iteneraryStatus is "byDay"
                          point.type === "point" && (
                           <Byday/>    
                            )
                        )}                       
                     </>
                        
                     ))
                   }  
               </Flex>
          </>  
            )
           )
          }
          </Flex>
          <Box  height="370px" w="100%"  mt="10px">
             <App/>
          </Box>
    </Box>
  </Dashboardlayout> 
  )
}

export default Itinerary