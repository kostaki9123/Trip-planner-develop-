import { Spinner , Flex } from '@chakra-ui/react'

const SpinnerLoader = () => {
  return (
   <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
      <Spinner/>
   </Flex> 
  )
}

export default SpinnerLoader