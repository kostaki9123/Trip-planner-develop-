import { Menu , MenuButton , MenuItem ,MenuList ,Button , Box } from "@chakra-ui/react"
import { IoIosArrowDown } from "react-icons/io";

type props = {
   setIteneraryStatus: any
}

const OrderByMenu = (props : props) => {


  return (
  <Box w="100%" display="flex" alignItems="center" justifyContent="center">  
      <Menu placement="bottom">
         <MenuButton  as={Button} rightIcon={<IoIosArrowDown />} w="10%"  h="40px" mt="10px" borderRadius="9px" >
           Order by
         </MenuButton>
         <MenuList color="black" >
           <MenuItem textAlign="center" onClick={() => props.setIteneraryStatus("byPlace")}>By place</MenuItem>
           <MenuItem textAlign="center" onClick={() => props.setIteneraryStatus("byDay")}>By day</MenuItem>
         </MenuList>
     </Menu>
  </Box> 
  )
}

export default OrderByMenu