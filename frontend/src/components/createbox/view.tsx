import { Box ,Flex,Text,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup, Heading} from '@chakra-ui/react'
import { Tpoint } from '../../Redux/Slices/PointsSlice'


type Props = {
    isOpen : any
    onClose : any
    data : Tpoint

  }

const View = (props : Props) => {

  console.log("els" ,props.data)
  return (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader textAlign="center">Point info</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
       {props.data.type === "point" ? 
        <>
         <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
          <Heading as="h5" size="md" p="10px">Start Date:</Heading><Text paddingTop="2px" >{props.data.startdate}</Text>
         </Flex>
          <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
          <Heading as="h5" size="md" p="10px">Location :</Heading><Text paddingTop="2px" >{props.data.location ? <>{props.data.location}</> : <></>}</Text>
         </Flex>   
         {props.data.enddate && (
         <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
           <Heading as="h5" size="md" p="10px">End Date:</Heading><Text paddingTop="2px" >{props.data.enddate}</Text>
         </Flex>
         )}
        </>
         : 
         <>
          <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
           <Heading as="h5" size="md" p="10px">Date:</Heading><Text paddingTop="2px" >{props.data.startdate}</Text>
          </Flex>
          <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
           <Heading as="h5" size="md" p="10px">Time:</Heading><Text paddingTop="2px" >{props.data.time}</Text>
          </Flex>  
          <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
           <Heading as="h5" size="md" p="10px">By:</Heading><Text paddingTop="2px" >{props.data.moveIcon}</Text>
          </Flex>  
          <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
           <Heading as="h5" size="md" p="10px">From:</Heading><Text paddingTop="2px" >{props.data.from ?<>{props.data.from }</> : null}</Text>
          </Flex>  
          <Flex flexDirection="row" justifyContent="start" gap="7px" alignItems="center">
           <Heading as="h5" size="md" p="10px">To:</Heading><Text paddingTop="2px" >{props.data.to ?<>{props.data.to }</> : null}</Text>
          </Flex>  
               
        </>  
        }

      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={props.onClose}>
          Close
        </Button>
        
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default View