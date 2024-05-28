import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import { MdEdit } from "react-icons/md";
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState } from "react";
import Currencydropdown from "./CurrencyPriceInput/currencydropdown";

const userData = {
  labels: [
    'Red',
    'Blue',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
    ],
    hoverOffset: 4
  }]
};  

const Setbudget = () => {
  const [budget , setBudget] = useState<boolean>(false)
  const [showinput , setShowinput] = useState<boolean>(false)
  const [currentCurency , setcurrentCurency ] = useState<string>("EUR")

  return (
    <Flex alignItems="center" justifyContent="start" w="100%"  flexDirection="column" h="100%">
       <Flex  w="100%" h="47px" alignItems="start"  justifyContent="space-between">
           <Box pt="8px" px="14px"  h="47px" >
                 <Text  fontSize="20px" fontFamily="sans-serif" >Budget</Text>
           </Box>
       </Flex>   
      <Flex  alignItems="center" position="relative" h="82%" w="100%"  justifyContent="start"> 
          {budget ?
          <Flex  h="95%" w="100%"   mt="19px" alignItems="center" mb="27px" pb="10px" justifyContent="center">
               <Doughnut data={userData}/> 
               <Flex alignItems="center" borderRadius="5px" bgColor="rgb(40,44,53)" justifyContent="center" fontSize="22px" color="lime" position="absolute" top="-38px" cursor="pointer" right="10px" h="35px" w="35px">
                  <MdEdit/>
               </Flex>
          </Flex>
          :
          <>
          {showinput ?
            <Flex  h="60%" w="100%" gap="20px" alignItems="center" flexDir="column" mb="27px" pb="10px" justifyContent="center">
                 <Flex  w="55%" h="35%" alignItems="center" justifyContent="center" position="relative" >
                   <Input w="100%" pl="60px" type="number"/>
                   <Currencydropdown setcurrentCurency={setcurrentCurency} currentCurency={currentCurency}/>
                 </Flex>
                 
                 <Flex justifyContent="center" gap="20px" alignItems="center"  w="90%" h="35%">
                     <Button bgColor="red" _hover={{bgColor : "none" }} onClick={() => setShowinput(false)}>Cancel</Button>
                     <Button>Set</Button>
                 </Flex>
            </Flex>
            :  
            <Flex  h="110%" w="100%" alignItems="center" mb="27px" pb="10px" justifyContent="center">
                 <Button onClick={() => setShowinput(true)}  >Set budget</Button>
            </Flex>
           }
          </>
          }        
      </Flex>   
    </Flex>
  );
};

export default Setbudget;
