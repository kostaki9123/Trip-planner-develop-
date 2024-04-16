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
  {gridColumn: 2, gridRow : 3 ,line : "up"},
  {gridColumn: 3, gridRow : 2 ,line : "down" },
  {gridColumn: 4, gridRow : 3 ,line : "up" },
  {gridColumn: 5, gridRow : 2 ,line : "down"},
  {gridColumn: 6, gridRow : 3 ,line : "up" },
  {gridColumn: 7, gridRow : 2 ,line : "down"},
  {gridColumn: 8, gridRow : 3 ,line : "up" },
  {gridColumn: 9, gridRow : 2 ,line : "down"},
  {gridColumn: 10, gridRow : 3 ,line : "up" },
  {gridColumn: 11, gridRow : 2 ,line : "down"},
  {gridColumn: 12, gridRow : 3 ,line : "up" },
  {gridColumn: 13, gridRow : 2 ,line : "down"},
  {gridColumn: 14, gridRow : 3 ,line : "up" },
  {gridColumn: 15, gridRow : 2 ,line : "down"},
  {gridColumn: 16, gridRow : 3 ,line : "up" },
  {gridColumn: 17, gridRow : 2 ,line : "down"},
  {gridColumn: 18, gridRow : 3 ,line : "up" },
  {gridColumn: 19, gridRow : 2 ,line : "down"},
  {gridColumn: 20, gridRow : 3 ,line : "up" },
  {gridColumn: 21, gridRow : 2 ,line : "down"},
 ]
  
const Point = ( props  : Props ) => {

  return (
   <>
    
    <Box  gridColumn={positiongrid[props.index].gridColumn} gridRow={positiongrid[props.index].gridRow}  display="flex"  alignItems="center"  h="83px" w="89px" justifyContent="center" >
      <Box  border="1px solid lime"   w="90px"  h="90px" borderRadius="50%"   display="flex" flexDirection="column" alignItems="center" gap="3px" justifyContent="center">
        <IoLocationSharp />
        <Text as="h4">
             {props.data.location ? <>{props.data.location}</> : <>Place</> }
        </Text>
        <Actionmenu datalenght={props.datalenght} id={props.data._id || ""} index={props.index} data={props.data} />
        
      </Box>
      <Box position="relative" border="1px solid red" >
      {positiongrid[props.index].line === "up"  ?
           <Box position="absolute" top="-100px" right="-46px">
                 <Uniteline line="up" />
           </Box> 
           :
           <Box position="absolute" top="21px" right="-64px">
                 <Uniteline line="down"/>
           </Box>
           }
      </Box>
    </Box>
    {props.datalenght === props.index + 1 && (
    <>  
      <AddModal index={ props.index + 1}/>
    </>
    )}
     
  </>

  )
}

export default Point