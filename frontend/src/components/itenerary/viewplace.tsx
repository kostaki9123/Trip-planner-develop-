import { useDisclosure , Modal ,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,Button,ModalFooter } from "@chakra-ui/react"

type props = {
    isOpen : any
    onClose : any
}    

const Viewplace = (props : props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          ko
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default Viewplace