import { Box,Tabs,Tab,TabPanel,TabPanels ,TabList,Flex,useDisclosure,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { APIProvider } from '@vis.gl/react-google-maps';
import LocationInput from './locationinput';
import Placeinfomodal from './placeinfomodal';
import axios from 'axios';
import FindAccomodationMain from './findAccomodation/findAccomodationMain';
import FindPlacesMain from './findplaces/findPlacesMain';

type Props = {
  isOpen : any
  onClose : any
  width : number
}

let client_id = "HYNoYYqzfxUUlgdEIAk8r4AhKwlGYpXK"
let client_secret = "BxiNGwnHGeTWD9ft"

const Addplacemodal = (props : Props) => {
const [data ,setData] = useState<{}>({})
const [location , setLocation] = useState<google.maps.places.PlaceResult | null>(null)
const Infoplacemodal = useDisclosure()


//give places
const fetchData = async () => {
  const apikey = 'AIzaSyCAr2KKXk5lOGhbJQXkfLldvwnaXioCJ5Q';
  const url = 'https://places.googleapis.com/v1/places:searchNearby';

  const requestBody = {
    includedTypes: ["hostel"], 
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: {
          latitude:  40.730610,
          longitude: -73.935242
        },
        radius: 5000.0
      }
    }
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apikey,
      'X-Goog-FieldMask': '*'
    },
    body: JSON.stringify(requestBody)
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("data" ,data.places);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


useEffect(() => {
  if(location){
  Infoplacemodal.onOpen()
  } 
    fetchData()
},[location])


  return (
  <>
    
    <Modal  isOpen={props.isOpen} onClose={props.onClose} size="Xl">
     <ModalOverlay bgColor="rgba(0, 0, 0, 0)"/>
      <ModalContent border="2px solid lime" overflowY="auto"  w={{ base: '96%',sm: '96%', md: '95%',lg: '51%',xl: "42%",xll : "40%" ,xxl : "36%" ,xxxl : "36%" ,xxxxl: "36%"  ,'2xl': "35%" }} h="580px" zIndex={1} position="absolute" top="4.3%" left={{ base: '1%',sm: '2%', md: '2.5%',lg: '2%',xl: "258px",xll : "260px" ,xxl : "278px" ,xxxl : "289px",xxxxl: "294px" ,'2xl': "303px"}} >
            <ModalHeader  w="100%" display="flex" alignItems="center" justifyContent="center" >
               Xylophagou 
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" flexDir="column"  p="2px">
                 <Flex alignItems="center" justifyContent="center" px="17%" pb="10px" w="100%" h="80px" zIndex={9999} >
                    <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                       <LocationInput inputName='' deafultValue="" setLocation={setLocation}/>
                     </APIProvider>
                 </Flex>
                 <Box border="1px solid lime" w="100%" >
                      <Tabs>
                         <TabList >
                           <Tab w="50%" >Places</Tab>
                           <Tab w="50%" px="10px">Accomodation</Tab>
                         </TabList>
              
                       <TabPanels>
                          <TabPanel border="3px solid green" p="0">
                               <FindPlacesMain/>             
                          </TabPanel>
                          <TabPanel  p="0">
                               <FindAccomodationMain/>                     
                          </TabPanel>
                       </TabPanels>
                        </Tabs>
                  </Box>        
            </ModalBody>        
      </ModalContent> 
    </Modal>
    {location &&
        <Placeinfomodal isOpen={Infoplacemodal.isOpen} onClose={Infoplacemodal.onClose} />
     }
  </>
   
  )
}

export default Addplacemodal