import { Box ,Flex,Text,useDisclosure } from "@chakra-ui/react"
import Budgetnotepopup from "./budgetnotepopup"

const Budgetnote = () => {
  const budgetnotepopup = useDisclosure()

  return (
<>
   <Flex  onClick={budgetnotepopup.onOpen} alignItems="center" cursor="pointer" justifyContent="start" w="100%"  flexDirection="column" h="100%">
      <Flex   w="100%" h="37px" alignItems="start"  pb="2px"  justifyContent="space-between">
          <Box pt="8px" px="14px"  h="37px" >
                <Text  fontSize="20px" fontFamily="sans-serif" >Budget notes</Text>
          </Box>
      </Flex>   
      <Flex  w="100%" h="70px" alignItems="start" justifyContent="space-between">
          <Box   h="47px" w="100%"  >
                <Text  fontSize="14px" overflow="hidden" h="69px" w="282.5px"  py="7px" px="14px" fontFamily="sans-serif" display="block" >nwefkemfkefkemkrnrjnfrjnfjrngkrngeofklwemefklemflweoesmksdcmejfiejfiekjfekfmekfmekmfekmfkekmfkdscmdldkdcmldkvmwofmekfmlfk</Text>
          </Box>
      </Flex>   
       
   </Flex>

<Budgetnotepopup isOpen={budgetnotepopup.isOpen} onClose={budgetnotepopup.onClose} onOpen={budgetnotepopup.onOpen} data="kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfffm"/> 

</>    
  )
}

export default Budgetnote