import { Box ,Flex,Text } from "@chakra-ui/react"

const Changecurrency = () => {
  return (
 <Flex alignItems="center" justifyContent="start" w="100%"  flexDirection="column" h="100%">
    <Flex  w="100%" h="47px" alignItems="start"  justifyContent="space-between">
        <Box pt="8px" px="14px"  h="47px" >
              <Text  fontSize="20px" fontFamily="sans-serif" >Currency</Text>
        </Box>
    </Flex>   
    
 </Flex>
  )
}

export default Changecurrency