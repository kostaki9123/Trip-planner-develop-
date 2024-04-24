import { Flex, Text , Box , useDisclosure} from '@chakra-ui/react'
import { IoMdAdd } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import Addexpensemodal from './AddExpenseModal/addexpense';

//expenses structure
const expenses = {
    id: 1,
    date: "2024-04-17",
    AmountOfcategory: [
        { "Food" : "20" } ,
        { "Trasportation" : "50" } ,
        { "Accomodation" : "100" } ,
    ],
    TotelAmount: 170,
    currency: "USD",
    notes: "Bought groceries for the week",
}

const AllExpenes = () => {
    const addexpensesmodal = useDisclosure()
  return (
  <>
    <Flex position="relative" flexDir="column"  w="100%" h="100%">

    {/* Header     */}
       <Flex  w="100%" h="47px" alignItems="start"  justifyContent="space-between">
           <Box pt="8px" px="14px"  h="47px" >
                 <Text  fontSize="20px" fontFamily="sans-serif" >Expenses</Text>
           </Box>
           <Box pt="8px" px="14px"  h="47px" cursor="pointer" >
                 <Box color="lime" fontSize="30px" onClick={addexpensesmodal.onOpen}> 
                    <IoMdAdd/>
                 </Box>
           </Box>
        </Flex>  

     {/*  Main  */}
       <Flex  w="100%" h="300px" alignItems="start"  flexDirection="column" border="1px solid lime"  justifyContent="flex-start">
                      
           <Flex  py="4px" px="16px"  h="47px" w="100%" gap="10px" flexDirection="column" >
                <Flex  h="100%" alignItems="center" justifyContent="space-between" >
                    <Flex  justifyContent="space-between"  h="100%" gap="20px">
                           <Flex alignItems="center"  justifyContent="center" bgColor="rgba(40,44,53,255)" borderRadius="5px" color="lime"  h="32px"  w="32px" >
                              <FaBed fontSize="23px"/>
                           </Flex>      
                           <Flex pt="7px"  h="100%">
                             Hostel copenhagen
                           </Flex> 
                    </Flex>  
                   
                    <Flex alignItems="center" justifyContent="space-between" gap="30px" h="100%" >
                       <Flex alignItems="center"  gap="10px"  w="70px" justifyContent="space-between"  h="100%" >
                           <Flex alignItems="center" w="35px" h="35px" cursor="pointer"  justifyContent="center" >
                              <MdDelete/>
                           </Flex>     
                           <Flex h="100%"  alignItems="center" w="35px"  cursor="pointer"   justifyContent="center" >
                              <MdModeEditOutline/>
                           </Flex>                  
                       </Flex>
                       <Flex alignItems="center" color="yellow" fontWeight="500"  letterSpacing="0.5px"  h="100%" >
                             200.00 $ 
                       </Flex>
                       
                    </Flex>  

               </Flex>
                
           </Flex>             
        </Flex>  
    </Flex>
    <Addexpensemodal isOpen={addexpensesmodal.isOpen} onClose={addexpensesmodal.onClose}/>
 </>  
  )
}

export default AllExpenes