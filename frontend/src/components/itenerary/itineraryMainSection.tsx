import { Flex , Spinner ,Box } from "@chakra-ui/react"
import { useSelector } from 'react-redux'

import { RootState } from "../../Redux/store"
import EmptyItenerary from "./emptyItenerary"
import { Tpoint } from "../../Redux/Slices/PointsSlice"
import Byplace from "./byplace"

type props = {
    isPending : boolean
}

const ItineraryMainSection = (props : props) => {
    const allpoints = useSelector((state : RootState) => state.points)

  return (
   <>
      <Flex  w="100%"  flexDir="column" >
            { props.isPending ? 
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
   </>
  )
}

export default ItineraryMainSection