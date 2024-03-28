import { Menu , MenuList , MenuButton , MenuItem, Button, MenuOptionGroup  } from "@chakra-ui/react"
import { RiArrowDropDownLine  } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";


const Switchtrip = () => {
  return (
    <Menu placement="bottom" >
      <MenuButton   as={Button} w="225px" rightIcon={<RiArrowDropDownLine/>} _active={{bg : "rgb(40,44,53)"}} _hover={{bg : "rgb(40,44,53)"}} bgColor="rgb(40,44,53)" color="rgba(142,142,142,255)" mx="15px" >
        Manage Trips
      </MenuButton>
      <MenuList zIndex={9999} >
        <MenuOptionGroup title="My trips">
            <MenuItem>Belarus tour</MenuItem>
        </MenuOptionGroup>
        <MenuOptionGroup title="Add">
            <MenuItem icon={<IoMdAdd/>}>Create new trip</MenuItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default Switchtrip