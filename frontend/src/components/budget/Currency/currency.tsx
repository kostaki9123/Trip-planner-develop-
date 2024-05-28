import { Flex , Box ,Text} from "@chakra-ui/react"
import { useState } from "react"
import Currencydropdown from "./CurrencyPriceInput/currencydropdown"

const Currency = () => {
    const [currentCurency , setcurrentCurency ] = useState<string>("EUR")
    const [currentSumbol , setcurrentSumbol ] = useState<string>("€")
    
  return (
<Flex   alignItems="center"  justifyContent="start" w="100%"  flexDirection="column" h="100%">
    <Flex   w="100%" h="37px" alignItems="start"  pb="2px"  justifyContent="space-between">
        <Box pt="8px" px="14px"  h="37px" >
              <Text  fontSize="20px" fontFamily="sans-serif" >Currency</Text>
        </Box>
    </Flex>   
    <Flex  w="100%" h="79px" alignItems="center" justifyContent="center">
        <Flex  h="60px" w="70%" position="relative" mb="13px">
            <Currencydropdown currentCurency={currentCurency} setcurrentSumbol={setcurrentSumbol} setcurrentCurency={setcurrentCurency}/>
            <Flex alignItems="center" justifyContent="center" fontSize="26px" fontWeight="600" ml="20px" w="40%" h="100%" >{currentSumbol}</Flex>
        </Flex> 
    </Flex>   
     
 </Flex>
  )
}

export default Currency