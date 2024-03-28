import { Menu,MenuButton,useDisclosure, MenuList,MenuGroup,MenuItem } from "@chakra-ui/react";
import { HiDotsHorizontal } from "react-icons/hi";
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../Redux/store';
import { Tpoint, deletepoint } from "../../Redux/Slices/PointsSlice";

import View from "./view";
import Createpointbetween from "./form/createpointbetween";
import MovePoint from "./movePoint";
import Edit from "./edit";

type Props = {
    id : string
    index : number
    datalenght : number
    data : Tpoint
} 

const Actionmenu = (Props : Props) => {
    const modalform = useDisclosure()
    const modalview = useDisclosure()
    const modalmovepoint = useDisclosure()
    const modaledit = useDisclosure()
    const dispatch = useDispatch<AppDispatch>()

    const handledelete = () => {
        dispatch(deletepoint(Props.id))
     }

   
  return (
  <>
    <Menu closeOnSelect={false}>
      <MenuButton h="25px" w="28px" borderRadius="20%" p="6px" _hover={{backgroundColor : "rgb(23, 46,99)" }}>
        <HiDotsHorizontal/>
      </MenuButton>
      
      <MenuList color="black" zIndex={1} position="relative">
       <MenuGroup textAlign="center" title='List actions'>
         <MenuItem onClick={modalview.onOpen}>View point</MenuItem>
         <MenuItem onClick={modalform.onOpen}>Create point</MenuItem>
         <MenuItem onClick={modaledit.onOpen}>Edit</MenuItem>
         <MenuItem onClick={modalmovepoint.onOpen}>Move point</MenuItem>
         <MenuItem onClick={handledelete}>Delete</MenuItem>
         <MenuItem>Itenerary</MenuItem>
       </MenuGroup>
      
      </MenuList>
    </Menu>
     <Createpointbetween isOpen={modalform.isOpen} onClose={modalform.onClose} index={Props.index + 1}/>
     <View isOpen={modalview.isOpen} onClose={modalview.onClose} data={Props.data}/>
     <MovePoint isOpen={modalmovepoint.isOpen}  onClose={modalmovepoint.onClose} index={Props.index} datalenght={Props.datalenght}/>
     <Edit isOpen={modaledit.isOpen} onClose={modaledit.onClose} index={Props.index - 1} data={Props.data}/>
 </>  
  )
}

export default Actionmenu