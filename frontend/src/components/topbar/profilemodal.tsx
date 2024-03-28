import { Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, Avatar } from "@chakra-ui/react";

import { Box,Flex } from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Profilemodal = () => {

  return (
   <Menu>
     <MenuButton>
         <Avatar   name='kostas' src='/cartoon.jpg' ml="15px" cursor="pointer"  size="md" />
      </MenuButton>
       <MenuList zIndex={9999}>
         <MenuGroup title='Profile'>
           <MenuItem>My Account</MenuItem>
           <MenuItem>Payments </MenuItem>
         </MenuGroup>
         <MenuDivider />
         <MenuGroup title='Help'>
           <MenuItem>Docs</MenuItem>
           <MenuItem>FAQ</MenuItem>
         </MenuGroup>
       </MenuList>
   </Menu>  
  )
}

export default Profilemodal