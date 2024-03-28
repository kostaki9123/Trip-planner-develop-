import { Box, FormControl,Text,Accordion,Button,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel,Flex, Image } from "@chakra-ui/react"
import AccomodationBox from "./hotelsmodal";
import LocationInput from "./GoogleMap/locationinput";
import { useState } from "react";
import { APIProvider } from '@vis.gl/react-google-maps';


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

  console.log(staylocation)

  return (
  <Accordion key={props.key} allowMultiple >
     
       <AccordionItem borderTop="none" >
             <AccordionButton p={1.5} >
               <Box as="span" flex='1' textAlign='left' w="100%" fontSize="100%">
                 I will stay to...
               </Box>
               <AccordionIcon />
             </AccordionButton>
           <AccordionPanel p={1.5} >
             <AccomodationBox/> 
             <FormControl>
                 <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                     <LocationInput setLocation={setStaylocation} deafultValue={null}/>    
                 </APIProvider>    
             </FormControl>                  
           </AccordionPanel>
       </AccordionItem>

       <AccordionItem _focus={{border: "none"}}>
         <h2>
           <AccordionButton p={1.5}>
             <Box as="span" flex='1' textAlign='left'>
               I will visit...
             </Box>
             <AccordionIcon />
           </AccordionButton>
         </h2>
         <AccordionPanel pb={4}>
         <FormControl>

            <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                 <LocationInput setLocation={setStaylocation} deafultValue={null}/>    
            </APIProvider>     
         </FormControl>
         </AccordionPanel>
       </AccordionItem>

  </Accordion>   
  )
}
export default AccordionItenerary