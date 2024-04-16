import { Menu,MenuButton,MenuList,MenuGroup,MenuItem,MenuDivider,Button, Avatar } from "@chakra-ui/react";
import { AppDispatch } from "../../Redux/store";
import { useDispatch } from 'react-redux'
import { LogoutAsync } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

type props = {
  dropdownside ? : string
}

const Profilemodal = (props : props) => {
 
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()


const handleLogout = async () => {
   dispatch(LogoutAsync())
   navigate("/signin")
}

  return (
   <Menu placement="bottom-start" >
     <MenuButton>
         <Avatar   name='kostas' src='/cartoon.jpg' ml="15px" cursor="pointer"  size="md" />
      </MenuButton>
       <MenuList zIndex={9999} >
         <MenuGroup title='Profile'>
           <MenuItem>My Account</MenuItem>
           <MenuItem>Payments </MenuItem>
         </MenuGroup>
         <MenuDivider />
         <MenuGroup title='Help'>
           <MenuItem onClick={handleLogout}>Log out</MenuItem>
         </MenuGroup>
       </MenuList>
   </Menu>  
  )
}

export default Profilemodal