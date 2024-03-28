import { Box, Button, Flex ,Text, useDisclosure } from '@chakra-ui/react'

import { IoAirplaneOutline , IoTrain } from "react-icons/io5";
import { FaCar , FaBusAlt , FaBicycle, FaShip } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";

import { AppDispatch } from '../../Redux/store';
import Notesmodal from './notesmodal';
import Actionmenu from './actionmenu';
import AddModal from './addModal';
import { Tpoint, deletepoint } from "../../Redux/Slices/PointsSlice";

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



const movementIcon = [
   { Airplane :  <IoAirplaneOutline/> } ,
   { Train :  <IoTrain/> } , 
   { Car :  <FaCar/> } , 
   { Bus :  <FaBusAlt/>} , 
   { Cycle :  <FaBicycle/>} , 
   { Ship:  <FaShip/>} , 
]

//<Box className='movingboxdate' position="absolute" top="10px" right="55px" cursor="pointer" display="none">
//            <CiEdit/>
//          </Box>
          
 

const Movingbox = ( props : Props ) => {
   let icon
   

    switch (props.data.moveIcon) {
        case 'Airplane':
          icon = <IoAirplaneOutline />;
          break;
        case 'Train':
          icon = <IoTrain />;
          break;
        case 'Car':
          icon = <FaCar />;
          break;
        case 'Bus':
          icon = <FaBusAlt />;
          break;
        case 'Cycle':
          icon = <FaBicycle />;
          break;
        case 'Ship':
          icon = <FaShip />;
          break;
        default:
          icon = props.data.moveIcon; // Handle default case or provide a default icon
          break;
    }

    

  return (
    <>
    <Flex  align="center" justify="center"   h="83px" w="89px" gridColumn={positiongrid[props.index].gridColumn} gridRow={positiongrid[props.index].gridRow}>
      <Flex  border="2px solid red" direction="column" alignItems="center" gap="4px" p="10px" justifyContent="center" h="90px" w="90px"  backgroundColor="rgb(40,44,53)" borderRadius="50%"   >
          <Box paddingBottom="5px">
          {icon}
          </Box >       
          <Box fontSize="10px">
           {props.data.from && null }
           {props.data.to && null }
          </Box>
         
          <Actionmenu datalenght={props.datalenght} id={props.data._id || ""} index={props.index} data={props.data}/> 
      </Flex>     
    </Flex>
    {props.datalenght === props.index + 1 && (
     <>  
      <AddModal index={ props.index + 1}/>
     </>)
    }
  </>  
   )}

export default Movingbox
