import { useState ,useEffect } from 'react'
import { Box , Flex, Spinner ,  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { BsThreeDots } from "react-icons/bs";


import Dashboardlayout from '../components/DashboardLayout/dashboardlayout';
import { Tpoint, fetchdata } from '../Redux/Slices/PointsSlice'
import { AppDispatch, RootState } from '../Redux/store'
import AccordionItenerary from '../components/itenerary/accodion';
import App from '../components/itenerary/GoogleMap/mainmap';
import Byplace from '../components/itenerary/byplace';
import EmptyItenerary from '../components/itenerary/emptyItenerary';


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
         <Flex  w="100%"  flexDir="column" >
         { isPending ? 
          <Flex position="absolute" top="45%" left="47%" > 
            <Spinner size='xl' />
          </Flex> 
          :  (
          allpoints?.length === 0 ? 
          ( <EmptyItenerary/> )
          : (
          <>  
               <Flex w="100%" flexDir="row" h="100%" px="12px " gap="12px"  flexWrap="wrap" > 
                   {allpoints?.map(( point : Tpoint, key : number) => (  
                     <>
                        {(
                        point.type === "point" && (
                           <Byplace data={point} key={key}/>     
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
          <Box  height="370px" w="100%"  mt="10px" border="1px solid lime">
            
          </Box>
    </Box>
  </Dashboardlayout> 
  )
}

export default Itinerary