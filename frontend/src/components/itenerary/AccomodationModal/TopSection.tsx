import { Flex ,Text,Box } from "@chakra-ui/react"
import { MdDelete } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


type props = {
   title : string
}

const TopSection = (props : props) => {
  return (
     <Flex w="100%" alignItems="center" justifyContent="center"> 
        <Flex position="absolute" alignItems="center"  left="11.5px" top="10px" fontSize="20px" color="blue" cursor="pointer"> 
           <Box>
               <FaBookmark/>
           </Box>
           <Box color="white">
               <MdKeyboardArrowDown/>
           </Box>
        </Flex> 
        <Text h="20%" w="100%" textAlign="center" fontSize="15px" mb="10px">{props.title}</Text> 
        <Box position="absolute" right="7px" top="9px" fontSize="22px" color="red" cursor="pointer"> 
            <MdDelete/>
        </Box> 
     </Flex>
  )
}

export default TopSection