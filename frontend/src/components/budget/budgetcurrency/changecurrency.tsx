import { Box ,Flex,Text,useDisclosure} from "@chakra-ui/react"
import Currencypopup from "./currencypopup"

const Changecurrency = () => {
  const changecurrencypopup = useDisclosure()
  return (
 <Flex alignItems="center" onClick={changecurrencypopup.onOpen} justifyContent="start" w="100%"  flexDirection="column" h="100%">
    <Flex  w="100%" h="47px" alignItems="start"  justifyContent="space-between">
        <Box pt="8px" px="14px"  h="47px" >
              <Text  fontSize="20px" fontFamily="sans-serif" >Currency</Text>
        </Box>
    </Flex>   
    <Currencypopup isOpen={changecurrencypopup.isOpen}  onClose={changecurrencypopup.onClose}   onOpen={changecurrencypopup.onOpen} data="δ3ν" />
    
 </Flex>
  )
}

export default Changecurrency