import { Box ,Flex,useDisclosure,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect } from 'react';


type Props = {
    isOpen : any
    onClose : any
  }

const Placeinfomodal = (props : Props) => {

    const getData = async () => {
        const apiKey = 'AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg';
        const placeId = 'ChIJ13K41xNTUkYR82m2zsHJoWc';
        const fields = 'id,displayName';
      
        const url = `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&key=${apiKey}`;
      
        try {
          const response = await axios.get(url);
          console.log("Response:", response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      
      
      useEffect(() => {
          getData()
      },[])
      

  return (
    <Modal  isOpen={props.isOpen} onClose={props.onClose} size="sm">
     <ModalOverlay bgColor="rgba(0, 0, 0, 0)"/>
      <ModalContent border="1px solid lime" w="380px" h="400px" pos="absolute" top="5.6%" left="320px" >
            <ModalHeader  w="100%" display="flex" alignItems="center" justifyContent="center" >
               place info
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" flexDir="column" border="1px solid lime" p="2px">
              
                 
            </ModalBody>        
      </ModalContent> 
    </Modal>
  )
}

export default Placeinfomodal