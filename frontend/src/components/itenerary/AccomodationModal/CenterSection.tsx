import { Flex , Box , Image , Text , } from "@chakra-ui/react"

import { FaDollarSign } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


 
const CenterSection = () => {
  return (
    
    <Flex w="100%"  h={{base : "75%" ,xxl: "150px" , xxxl : "150px" ,xxxxl: "75%" ,'2xl': '75%',}}  mb="8px"  alignItems="start" justifyContent="flex-start">
        <Box w="50%" h="100%" borderRadius="5px" p="3px" >
              <Image src='/towndownHos.jpg'  borderRadius="5px" h="100%" w="100%" />
        </Box>
        <Flex h={{base : "110px" ,  sm: '140px', md: '170px', lg: '230px',xl: '100px',xll : "120px" ,xxl: "150px" , xxxl : "150px" ,xxxxl: "110px" ,'2xl': '110px',}} w="50%" flexDir="column" alignItems="center" justifyContent="center" gap="10%"  >
                 <Flex alignItems="start" justifyContent="flex-start"   borderRadius="7px" w={{base : '60%',  sm: '60%', md: '60%', lg: '60%',xl: "70%",xll : '60%',xxl: '60%', xxxl : '60%',xxxxl: '60%','2xl': '60%'}} h="33%" color="lime" _hover={{cursor: "pointer", bgColor: "rgb(26,28,34)"}}>
                      <Flex  w="35%" h="100%" fontSize={{base : "23px",  sm: '23px', md: '25px', lg: '30px',xl: '18px',xll : "18px" ,xxl: "23px" , xxxl : "23px" ,xxxxl: "18px" ,'2xl': '"18px"',}} alignItems="center"  justifyContent="center">
                        <FaEye/>
                      </Flex> 
                      <Flex alignItems="center" justifyContent="center"  h="100%" w="66%">
                          <Text p="0" fontSize={{base : "23px",  sm: '23px', md: '25px', lg: '30px',xl: '18px',xll : "18px" ,xxl: "23px" , xxxl : "23px" ,xxxxl: "18px" ,'2xl': '"18px"',}}  color="white" textAlign="center" >
                            View
                          </Text>   
                      </Flex>            
                 </Flex>
                 <Flex alignItems="start" justifyContent="flex-start" borderRadius="7px" w={{base : '60%',  sm: '60%', md: '60%', lg: '60%',xl: "70%",xll : '60%',xxl: '60%', xxxl : '60%',xxxxl: '60%','2xl': '60%'}} h="33%" color="lime" _hover={{cursor: "pointer", bgColor: "rgb(26,28,34)"}}>
                     <Flex fontSize={{base : "23px",  sm: '23px', md: '25px', lg: '30px',xl: '18px',xll : "18px" ,xxl: "23px" , xxxl : "23px" ,xxxxl: "18px" ,'2xl': '"18px"',}}  w="35%" h="100%"  alignItems="center"  justifyContent="center">
                        <FaDollarSign/>
                      </Flex>  
                      <Flex alignItems="center" justifyContent="center"  h="100%" w="66%">
                          <Text p="0" fontSize={{base : "23px",  sm: '23px', md: '25px', lg: '30px',xl: '18px',xll : "18px" ,xxl: "23px" , xxxl : "23px" ,xxxxl: "18px" ,'2xl': '"18px"',}}  color="white" textAlign="center" >
                            Cost
                          </Text>   
                      </Flex>
                 </Flex>
            </Flex>  
    </Flex>
  )
}

export default CenterSection