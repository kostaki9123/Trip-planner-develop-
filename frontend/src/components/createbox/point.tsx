import { Box  ,Button,Text, background } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { HiDotsHorizontal } from "react-icons/hi";

import axios from "axios";

import AddModal from "./addModal";
import Uniteline from "./Unitedline";
import { Tpoint, deletepoint } from "../../Redux/Slices/PointsSlice";
import Actionmenu from "./actionmenu";

type Props = {
   data: Tpoint 
   index : number  
   datalenght : number
}

const positiongrid = [
  {gridColumn: 2, gridRow : 3 },
  {gridColumn: 3, gridRow : 2 },
  {gridColumn: 4, gridRow : 3 },
  {gridColumn: 5, gridRow : 2 },
  {gridColumn: 6, gridRow : 3 },
  {gridColumn: 7, gridRow : 2 },
  {gridColumn: 8, gridRow : 3 },
  {gridColumn: 9, gridRow : 2 },
  {gridColumn: 10, gridRow : 3 },
 
  ]
  

const Point = ( Props  : Props ) => {
 
  return (
   <>
    <Box  gridColumn={positiongrid[Props.index].gridColumn} gridRow={positiongrid[Props.index].gridRow}  display="flex"  alignItems="center"  h="83px" w="89px" justifyContent="center" >
      <Box  border="1px solid lime" w="90px"  h="90px" borderRadius="50%"   display="flex" flexDirection="column" alignItems="center" gap="3px" justifyContent="center">
        <IoLocationSharp />
        <Text as="h4">
             {Props.data.location ? <>{Props.data.location}</> : <></> }
        </Text>
        <Actionmenu datalenght={Props.datalenght} id={Props.data._id || ""} index={Props.index} data={Props.data} />
      </Box>
      
    </Box>
    {Props.datalenght === Props.index + 1 && (
    <>  
      <AddModal index={ Props.index + 1}/>
    </>
    )}
  </>

  )
}

export default Point