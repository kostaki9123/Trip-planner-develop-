import { Editable,Box,EditableInput,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup, Heading, Textarea} from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState ,useRef , useEffect } from 'react';

type props = {
    isOpen : any
    onClose : any
    onOpen : any
    data : any
  }



const Budgetnotepopup = (props: props) => {
    const [notes, setNotes] = useState<boolean>(false)
    const textarea:any = useRef(null)
    const [text, setText] = useState<string>(props.data || '');
  
    const handleChange = (event : any) => {
      setText(event.target.value);
    };
  



    const handleData = async () =>{
        console.log(text)
    }

    //sto onclose na kanei save 

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} closeOnOverlayClick={false}>
    <ModalOverlay />
    <ModalContent pos="absolute" top="15%" left="43%">
          <ModalHeader display="flex" alignItems="center" justifyContent="center"  >
            Budget notes
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody  mx="10px" >
              <Box p="4px" >         
                <Textarea p="7px 10px 10px 10px" ref={textarea} h="200px" onBlur={() => setNotes(false)}  overflowY="hidden" border="none" resize="none" placeholder="Add notes,info e.c.t" value={text} onChange={handleChange} />
             </Box>
          </ModalBody>
          <ModalFooter >
            <Button colorScheme='blue' onClick={handleData} mr={3} type="submit">
              Close
            </Button>     
          </ModalFooter>
    </ModalContent>
    </Modal> 
  )
}

export default Budgetnotepopup