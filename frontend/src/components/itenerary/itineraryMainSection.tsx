import { Flex , Spinner ,Box } from "@chakra-ui/react"
import { useSelector } from 'react-redux'

import { RootState } from "../../Redux/store"
import EmptyItenerary from "./emptyItenerary"
import { Tpoint } from "../../Redux/Slices/PointsSlice"
import Byplace from "./byplace"
import App from "./GoogleMap/mainmap"

type props = {
    isPending : boolean
}

//responsive fix width sta breakpoints 

const ItineraryMainSection = (props : props) => {
    const allpoints = useSelector((state : RootState) => state.points)

  return (
   <>
      <Flex border="2px solid lime"  w={{ base: '100%',sm: '100%', md: '100%',lg: '55%',xl: '60%',xll : "55%" ,xxl : "50%" ,xxxl : "50%",xxxxl: "50%" ,'2xl': '50%'}}  position={{ base: "relative",sm: "relative", md: "relative",lg: "absolute",xl: "absolute",xll : "absolute" ,xxl : "absolute",xxxl : "absolute",xxxxl: "absolute" ,'2xl': "absolute"}} mb={{ base: '15px',sm: '15px', md: '15px',lg: '15px'}}   h={{ base: 'auto',sm: 'auto', md: 'auto',lg: '615px',xl: '615px',xll : "615px" ,xxl : "615px" ,xxxl : "615px",xxxxl: "615px" ,'2xl': 'auto'}} flexDir="row"  overflowX="hidden"  overflowY={{ base: 'hidden',sm: 'hidden', md: "hidden",lg: "auto",xl: "auto",xll : "auto" ,xxl : "auto" ,xxxl : "auto"}}>
            { props.isPending ? 
             <Flex position="absolute" top="45%" left="47%" > 
               <Spinner size='xl' />
             </Flex> 
             :  (
             allpoints?.length === 0 ? 
             ( <EmptyItenerary/> )
             : (
             <>  
                  <Flex  w="100%" justifyContent="start" alignItems="start" flexDir="column" px="12px " >
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
       <Box border="2px solid red" pos={{ base: 'relative',sm: 'relative', md: "relative",lg: 'absolute',xl: 'absolute',xll : "absolute" ,xxl : "absolute" ,xxxl : "absolute",xxxxl: "absolute" ,'2xl': "absolute"}} h={{base: "300px" , sm: "300px",md: "300px" ,lg : "unset"}}  right="0px" top="0" bottom="0px" w={{ base: '100%',sm: '100%', md: '100%',lg: '45%',xl: '40%',xll : "45%" ,xxl : "50%" ,xxxl : "50%",xxxxl: "50%" ,'2xl': '50%'}}  >
         <App/>
       </Box>
   </>
  )
}

export default ItineraryMainSection