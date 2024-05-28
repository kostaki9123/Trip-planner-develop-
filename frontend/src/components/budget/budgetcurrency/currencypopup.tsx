import { Editable,Box,EditableInput,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup, Heading, Textarea} from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState ,useRef , useEffect } from 'react';
import CaptionCarousel from './ChangeCurrencycarousel';

type props = {
    isOpen : any
    onClose : any
    onOpen : any
    data : any
  }



const Currencypopup = (props: props) => {
   

    //sto onclose na kanei save 

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} closeOnOverlayClick={false}>
    <ModalOverlay />
    <ModalContent pos="absolute" top="15%" left="43%">
          <ModalHeader display="flex" alignItems="center" justifyContent="center"  >
            Change currency
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody  mx="10px" >
             <Box h="200px" w="200px">
               <CaptionCarousel/>
            </Box>
          </ModalBody>
          <ModalFooter >
            <Button colorScheme='blue'  mr={3} type="submit">
              Close
            </Button>     
          </ModalFooter>
    </ModalContent>
    </Modal> 
  )
}

export default Currencypopup