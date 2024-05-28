import { Flex ,Box,useDisclosure  } from "@chakra-ui/react"
import { IoMdAdd } from "react-icons/io";

import AccordionItenerary from "./accordionItenerary"
import { Tpoint } from "../../Redux/Slices/PointsSlice";
import Addplacemodal from "./addplacemodal";
import { useEffect, useRef, useState } from "react";

type props = {
   data : Tpoint
   key : number
}

const Byplace = (props : props) => {
   const [ widthForModal , setwidthForModal ] = useState<number>(0)
   const extractwithddiv : any = useRef()
   const addplacemodal = useDisclosure()


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

   // useEffect(() => {
   //   if (extractwithddiv.current) {
   //    const width = extractwithddiv.current.offsetWidth
   //    setwidthForModal(width);
   //    } 
   // },[ widthForModal])

   
  return (
      

    <>
     <Flex ref={extractwithddiv} border="1px solid red" key={props.key} position="relative"   mt="13px" pb="10px" w="100%"  flexDirection="column" gap="10px" bgColor="rgb(26,28,34)" borderRadius="10px" alignItems="start" justifyContent="start" >
            <Flex  flexDirection="column"  alignItems="start" justifyContent="center" h="30px"  p="6px" w="100%"  borderRadius="6px">
                    <Flex  alignItems="center" justifyContent="space-between" w="100%"> 
                         <Box position="absolute"  fontSize="15px" >
                           {startDateformatted}
                           {enddateformatted &&
                           <> - {enddateformatted}</> 
                            
                            }
                         </Box> 
                         <Box w="29px"> </Box> 
                         <Box fontSize="19px" fontWeight="600"  >
                          {props.data.location?<> {props.data.location} </> : <></>}
                         </Box> 
                         <Box   position="relative" h="100%" py="4px" onClick={addplacemodal.onOpen} cursor="pointer" color="lime"   px="3px" fontSize="22px" borderRadius="7px" >
                           <IoMdAdd/>
                           <Flex fontSize="17px" px="4px" justifyContent="center" alignItems="center"  position="absolute" color="white" left="-90px" bgColor="rgb(40,44,53)" h="30px" borderRadius="5px"  top="3px">Zoom</Flex>
                        </Box>  
                    </Flex>
            </Flex>
            <Flex  w="100%" alignItems="center" justifyContent="center" >
                  <Flex w="90%" borderRadius="5px">
                     <AccordionItenerary key={props.key} />
                  </Flex> 
            </Flex>
            <Addplacemodal isOpen={addplacemodal.isOpen} onClose={addplacemodal.onClose} width={widthForModal} /> 
     </Flex>
     
   </>
  )
}

export default Byplace