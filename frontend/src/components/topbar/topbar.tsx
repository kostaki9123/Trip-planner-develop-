import { Box , Avatar,  Flex, Heading, Text } from '@chakra-ui/react'
import Profilemodal from './profilemodal'
import Switchtrip from './switchtrip'


const Topbar = () => {
 

  return (
    <Box  position="fixed" h="80px" w="100%" zIndex={9997} justifyContent="space-between" bgColor="rgb(26,28,34)"  display="flex" alignItems="center" >  
       <Flex  h="100%" w="40%">
          <Flex w="40.5%" alignItems="center" justifyContent="center" >
           <Heading fontSize="19px" textAlign="center" color="white" >Trip planner</Heading>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
           <Heading as="h5" size="md" color="white" ml="55px" fontFamily="sans-serif" >Demark-Germany-Belgium Trip</Heading>
          </Flex>
       </Flex>
       <Flex  mr="30px" align="center" justify="space-around" position="relative" >
          <Switchtrip/>
          <Heading as="h5" size="md" color="white" mx="15px" >Konstantinos Papouis</Heading>
          <Profilemodal/>
       </Flex>
      
    </Box>
  )
}

export default Topbar