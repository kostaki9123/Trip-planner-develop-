import { Box ,Flex,Text } from "@chakra-ui/react"

const Budgetnote = () => {
  return (
 <Flex alignItems="center" cursor="pointer" justifyContent="start" w="100%"  flexDirection="column" h="100%">
    <Flex   w="100%" h="37px" alignItems="start"  pb="2px"  justifyContent="space-between">
        <Box pt="8px" px="14px"  h="37px" >
              <Text  fontSize="20px" fontFamily="sans-serif" >Budget notes</Text>
        </Box>
    </Flex>   
    <Flex  w="100%" h="79px" alignItems="start" justifyContent="space-between">
        <Box   h="47px" w="100%"  >
              <Text  fontSize="14px" overflow="hidden" h="69px" w="282.5px" pb="8px" py="4px" px="14px" fontFamily="sans-serif" display="block" >nwefkemfkefkemkrnrjnfrjnfjrngkrngeofklwemefklemflweoesmksdcmejfiejfiekjfekfmekfmekmfekmfkekmfkdscmdldkdcmldkvmwofmekfmlfk</Text>
        </Box>
    </Flex>   
     
 </Flex>
  )
}

export default Budgetnote