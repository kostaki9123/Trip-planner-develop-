import React from 'react'
import { Modal , Input ,ModalOverlay,Button ,ModalContent ,ModalHeader ,ModalCloseButton, ModalFooter , ModalBody } from '@chakra-ui/react'

type Props = {
   isopen : any
   onClose : any
}


//save tis notes 
//telioma ui

const Notesmodal = (props : Props) => {
  return (
    <Modal isOpen={props.isopen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ticket Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input>
          </Input>
          </ModalBody>

          <ModalFooter>              
            <Button variant='ghost' mr={3} onClick={props.onClose}>
              Save
            </Button>    
            <Button colorScheme='blue' mr={3} onClick={props.onClose}>
              Close
            </Button>         
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default Notesmodal