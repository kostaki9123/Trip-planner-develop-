import { Box, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import Dropdownchilds from "./dropdownchilds";
import { lazy } from "react";

type props = {
  setcurrentCurency : any
  currentCurency : any
}



const Currencydropdown = (props : props) => {

  return (
    <Menu>
       
       <MenuButton  display="flex" alignItems="start" justifyContent="start"   position="absolute" zIndex="9999"cursor="pointer" left="0px"  fontWeight="bold" fontFamily="sans-serif"  top="0px" w="58px" h="39px"> 
                    <Box cursor="pointer" pl="3px"  py="8px" w="40px" h="39px"> 
                          {props.currentCurency}
                    </Box>              
       </MenuButton>
       <Flex w="17px" alignItems="center" left="40px" fontSize="20px"  cursor="pointer"  position="absolute" justifyContent="center"  h="39px" > 
                       <IoIosArrowDown/>
       </Flex>  
       <MenuList position="relative" bgColor="rgb(26,28,34)" zIndex={1} border="none">
         <Box  position="absolute" color="black" top="0px" left="-20px" bgColor="pink"  h="400px" w="200px" overflowY="auto">
             <Dropdownchilds setcurrentCurency={props.setcurrentCurency}/>              
         </Box>
       </MenuList>
   </Menu>
  )
}

export default Currencydropdown