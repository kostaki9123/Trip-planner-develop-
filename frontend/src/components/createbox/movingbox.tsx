import { Box, Button, Flex ,Text, useDisclosure } from '@chakra-ui/react'

import { IoAirplaneOutline , IoTrain } from "react-icons/io5";
import { FaCar , FaBusAlt , FaBicycle, FaShip } from "react-icons/fa";

import Actionmenu from './actionmenu';
import AddModal from './addModal';
import { Tpoint, deletepoint } from "../../Redux/Slices/PointsSlice";
import Uniteline from './Unitedline';

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

const movementIcon = [
   { Airplane :  <IoAirplaneOutline/> } ,
   { Train :  <IoTrain/> } , 
   { Car :  <FaCar/> } , 
   { Bus :  <FaBusAlt/>} , 
   { Cycle :  <FaBicycle/>} , 
   { Ship:  <FaShip/>} , 
]

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
          <Box paddingBottom="5px" fontSize="20px">
          {icon}
          </Box >       
          <Box fontSize="10px">
           {props.data.from && null }
           {props.data.to && null }
          </Box>
         
          <Actionmenu datalenght={props.datalenght} id={props.data._id || ""} index={props.index} data={props.data} /> 
      </Flex>
      <Box position="relative"  >
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
      
    </Flex>
    
    {props.datalenght === props.index + 1 && (
     <>  
      <AddModal index={ props.index + 1}/>
     </>)
    }
  </>  
   )}

export default Movingbox
