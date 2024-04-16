import { Flex ,Box  } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs";

import AccordionItenerary from "./accodion"
import { Tpoint } from "../../Redux/Slices/PointsSlice";

type props = {
   data : Tpoint
   key : number
}

const Byplace = (props : props) => {
   let startdate = new Date(props.data.startdate)
   let enddate
   let enddateformatted
   if (props.data.enddate){
   enddate =  new Date(props.data.enddate)
   enddateformatted = enddate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
    });
   }

   const startDateformatted = startdate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
    });


  return (
    <Flex key={props.key}  mt="13px" w={{base: '99%',lg: '99%', xl: '49%',xll : "49.19%" ,xxxl : "49.4%",xxxxl : "32.6%"  ,'2xl': '32.65%',}} flexDirection="column" gap="10px" bgColor="rgb(26,28,34)" borderRadius="10px" alignItems="start" justifyContent="start" >
            <Flex flexDirection="column" alignItems="start" justifyContent="center" p="6px" w="100%"  borderRadius="6px">
                    <Flex alignItems="center" justifyContent="space-between" w="100%"> 
                        <Box fontSize="15px">
                           {startDateformatted}
                           {enddateformatted &&
                           <> - {enddateformatted}</> 
                            
                            }
                        </Box>  
                       <Box fontSize="19px" fontWeight="600" >
                          {props.data.location?<> {props.data.location} </> : <></>}
                         </Box> 
                         <Box cursor="pointer"  p="7px" borderRadius="7px" _hover={{backgroundColor : "rgb(23, 46,99)" }}>
                           <BsThreeDots/>
                        </Box>  
                    </Flex>
                    <Flex key={props.key} flexDirection="column" mt="10px" w="100%">
                         <AccordionItenerary key={props.key}/>
                   </Flex>
            </Flex>
     </Flex>
  )
}

export default Byplace