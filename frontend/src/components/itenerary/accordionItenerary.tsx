import { Box, FormControl,Text,Accordion,Button,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel,Flex, Image } from "@chakra-ui/react"
import AccomodationBox from "./AccomodationModal/hotelsmodal";
import LocationInput from "./GoogleMap/locationinput";
import { useState } from "react";
import { APIProvider } from '@vis.gl/react-google-maps';
import TopSection from "./AccomodationModal/TopSection";


//<Box w="100%" p={1} pl={0}>
//     <Button onClick={onOpen} h="25px" bgColor="rgb(30,60,70)" color="white" _hover={{bgColor : "rgb(10,80,90)"}} >Recommended hotels</Button>
//</Box>


//accomodation compenent 
//night to stay ?
//add cost
//notes

type props = {
  key : number
}

const AccordionItenerary = (props : props) => {
  const [staylocation , setStaylocation] = useState<google.maps.places.PlaceResult | null>(null)

  

  return (
  <Accordion key={props.key} allowMultiple w="100%">
     
       <AccordionItem w="100%" borderRadius="5px" border="none"  bgColor="rgb(40,44,53)">
             <AccordionButton p={1.5} position="relative">
               <TopSection title="Nyhanv"/>
             </AccordionButton>
           <AccordionPanel p={1.5} >
             <AccomodationBox/>         
           </AccordionPanel>
       </AccordionItem>
  </Accordion>   
  )
}
export default AccordionItenerary