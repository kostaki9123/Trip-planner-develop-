import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../Redux/Slices/PointsSlice'
import Countdown from "../components/home/countdown";
import Minimaps from "../components/home/minimaps";
import Event from "../components/home/event";
import Mytivkets from "../components/home/mytivkets";
import Mynotes from "../components/home/mynotes";
import { AppDispatch, RootState } from '../Redux/store'
import Checklst from "../components/home/checklist";
import Dashboardlayout from "../components/DashboardLayout/dashboardlayout";
// fetch user data and pass them in prop
// display grid
const Home = () => {
  const allpoints = useSelector((state : RootState) => state.points)

  const dispatch = useDispatch<AppDispatch>()

  const firstcatchfn =  async () => {
    try{
     await dispatch(fetchdata())
    }
    catch(error){
      console.error('An error occurred:', error);
    }
    }
  
  useEffect(() => {
    
     firstcatchfn()
     
  } , [])

   
  
    return (
      <Dashboardlayout>
       <Box bgColor="rgb(40,44,53)" h="100%" p="30px" display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gridTemplateRows="1fr 1fr 1fr 1fr" gap="30px">
         <Box  bgColor="	rgb(26,28,34)" gridColumn="1/3" gridRow="1/3" borderRadius="10px"><Minimaps/></Box>
         <Box  bgColor="	rgb(26,28,34)" gridColumn="1/2" gridRow="3/5" borderRadius="10px"><Checklst/></Box>
         <Box  bgColor="	rgb(26,28,34)" gridColumn="2/3" gridRow="3/5" borderRadius="10px">Trasportation</Box>
         <Flex bgColor="	rgb(26,28,34)" gridColumn="4/5" gridRow="1/2" borderRadius="10px" alignItems="center" w="100%" justifyContent="center"><Countdown/></Flex>
         <Box  bgColor="	rgb(26,28,34)" gridColumn="3/4" gridRow="2/3" borderRadius="10px"><Mynotes/></Box>
         <Box  bgColor="	rgb(26,28,34)" gridColumn="3/4" gridRow="3/5" borderRadius="10px">Safety metric - tips</Box>
         <Box  bgColor="	rgb(26,28,34)" gridColumn="3/4" gridRow="1/2" borderRadius="10px">notifcations</Box>
         <Box  bgColor="	rgb(26,28,34)" gridColumn="4/5" gridRow="2/5" borderRadius="10px"><Event/></Box>
       </Box>
      </Dashboardlayout> 
    );
  };
  
  export default Home;