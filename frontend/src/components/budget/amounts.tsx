       import { Box , Flex ,Text} from '@chakra-ui/react'
import React from 'react'

const Amounts = () => {
  return (
    <Box  h="100%" w="100%">
      {/** Header */}
      <Flex  w="100%" h="30px" alignItems="start"  justifyContent="space-between">
           <Box pt="8px" px="14px"  h="47px" >
                 <Text  fontSize="20px" fontFamily="sans-serif" >Amounts</Text>
           </Box>
       </Flex>

      {/** Main */}
      <Flex  w="100%" h="214px"   flexDirection="column" alignItems="center" justifyContent="center" gap="30px">
          <Flex  h="70px" w="160px" flexDir="column" border="1px solid rgb(40,44,53)" borderRadius="5px">
              <Flex h="35%" w="100%"  pt="3px" pl="9px" color="grey" fontSize="15px">Expenses</Flex>
              <Flex h="35%" fontWeight="400" w="100%"  pb="10px" color="white" alignItems="start" justifyContent="center" fontSize="25px">$1750</Flex>
          </Flex>
          <Flex  h="70px" w="160px" flexDir="column" border="1px solid rgb(40,44,53)" borderRadius="5px">
              <Flex h="35%" w="100%"  pt="3px" pl="9px" color="grey" fontSize="15px">Per day</Flex>
              <Flex h="35%" fontWeight="400" w="100%"  pb="10px" color="white" alignItems="start" justifyContent="center" fontSize="25px">$150</Flex>
          </Flex>
         
      </Flex>

    </Box>
  )
}

export default Amounts