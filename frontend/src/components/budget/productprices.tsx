import { Box ,Flex,Image,Text } from "@chakra-ui/react"
import { FaBottleWater } from "react-icons/fa6";
import { BsCupHotFill } from "react-icons/bs";
import { CiBeerMugFull } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const Productprices = () => {
    const morethaone = true
//apo global state na panoume array me code of countrys
//an yparxoi perrisoteroo apo mia fora mia xora na diagrafetai
//api gia na piasoume data times an yparxoun na deixoume an den yparxoun minita oti den vrikame data
//minima gia otan den exei valei points o xristis

  return (
    <Flex alignItems="center" justifyContent="start" w="100%"  flexDirection="column" h="100%">
        <Flex  w="100%"  h="47px" alignItems="start"  justifyContent="space-between">
            <Box pt="8px" px="14px"  h="37px" >
                  <Text  fontSize="20px" fontFamily="sans-serif" >Avarage prices</Text>
            </Box>
            {morethaone ? 
            <Flex alignItems="center" px="3px" mt="10px" mx="14px" cursor="pointer" h="35px" w="58px">
               <Image h="40px" width="34px" src="https://flagsapi.com/CY/flat/64.png" />
               <RiArrowDropDownLine fontSize="24px"/>
            </Flex>
            :
            <Box  mt="4px" mx="14px">
                <Image h="40px" width="34px" src="https://flagsapi.com/CY/flat/64.png" />
            </Box>
             }
        </Flex>

        <Flex  w="100%" h="220px" alignItems="start"  justifyContent="space-between">
            <Box  my="8px" mx="14px" h="202px" w="100%">
                
                <Flex  alignItems="start" justifyContent="start" h="40px" w="100%" >
                    <Flex  w="70%" gap="20px" h="100%"justifyContent="start" alignItems="center" >
                           <Flex alignItems="center"  justifyContent="center" bgColor="rgba(40,44,53,255)" borderRadius="5px" color="lime"  h="32px"  w="32px" >
                              <FaBottleWater fontSize="23px"/>
                           </Flex> 
                           <Text py="2px"  fontSize="18px" >Water</Text>
                    </Flex>
                    <Flex  alignItems="center" justifyContent="end" w="50%" h="100%">                 
                        <Text pr="10px" fontSize="19px">$1</Text>
                    </Flex>
                </Flex>

                <Flex  alignItems="start" justifyContent="start" h="40px" w="100%" >
                    <Flex w="70%" gap="20px" h="100%"justifyContent="start" alignItems="center" >
                           <Flex alignItems="center"  justifyContent="center" bgColor="rgba(40,44,53,255)" borderRadius="5px" color="lime"  h="32px"  w="32px" >
                              <BsCupHotFill fontSize="23px"/>
                           </Flex> 
                           <Text py="2px"  fontSize="18px" >Cappucino</Text>
                    </Flex>
                    <Flex  alignItems="center" justifyContent="end" w="50%" h="100%">                 
                        <Text pr="10px" fontSize="19px">$3.5</Text>
                    </Flex>
                </Flex>

                <Flex  alignItems="start" justifyContent="start" h="40px" w="100%" >
                    <Flex  w="50%" h="100%" gap="20px"  justifyContent="start" alignItems="center" >
                           <Flex alignItems="center"  justifyContent="center" bgColor="rgba(40,44,53,255)" borderRadius="5px" color="lime"  h="32px"  w="32px" >
                              <CiBeerMugFull fontSize="23px"/>
                           </Flex> 
                           <Text py="2px"  fontSize="18px">Beer</Text>
                    </Flex>
                    <Flex  alignItems="center" justifyContent="end" w="50%" h="100%">                 
                        <Text pr="10px" fontSize="19px">$4.5</Text>
                    </Flex>
                </Flex>

                <Flex  alignItems="start" justifyContent="start" h="40px" w="100%" >
                    <Flex  w="50%" h="100%" gap="20px"  justifyContent="start" alignItems="center" >
                           <Flex alignItems="center"  justifyContent="center" bgColor="rgba(40,44,53,255)" borderRadius="5px" color="lime"  h="32px"  w="32px" >
                              <FaBottleWater fontSize="23px"/>
                           </Flex> 
                           <Text py="2px"  fontSize="18px" >Water</Text>
                    </Flex>
                    <Flex  alignItems="center" justifyContent="end" w="50%" h="100%">                 
                        <Text pr="10px" fontSize="19px">$30</Text>
                    </Flex>
                </Flex>

                <Flex  alignItems="start" justifyContent="start" h="40px" w="100%" >
                    <Flex  w="50%" h="100%" gap="20px"  justifyContent="start" alignItems="center" >
                           <Flex alignItems="center"  justifyContent="center" bgColor="rgba(40,44,53,255)" borderRadius="5px" color="lime"  h="32px"  w="32px" >
                              <FaBottleWater fontSize="23px"/>
                           </Flex> 
                           <Text py="2px" fontSize="18px" >Water</Text>
                    </Flex>
                    <Flex  alignItems="center" justifyContent="end" w="50%" h="100%">                 
                        <Text pr="10px" fontSize="19px">$30</Text>
                    </Flex>
                </Flex>
                
            </Box>
        </Flex>

    </Flex>
  )
}

export default Productprices