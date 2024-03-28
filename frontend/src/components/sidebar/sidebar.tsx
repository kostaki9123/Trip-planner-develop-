import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';

// icons
import { CiHome } from "react-icons/ci";
import { IoMdCreate } from "react-icons/io";
import { GrSchedule } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { FaHandPointRight } from "react-icons/fa";

import Navitem from './navitem'
import Topbar from '../topbar/topbar';



const Sidebar = () => {
  const location = useLocation()
  const [sellected , setSellected] = useState<String>(location.pathname)
  
  return (
    <>
       <Flex 
       direction="column"
       bgColor="	rgb(26,28,34)"
       bottom="0"
       color="white"
       position="fixed"
       top="80px"
       left="0"
       width="250px"
       justifyContent="start"
       zIndex={9999}
       >
         <Flex  alignItems="flex-start" direction="column">
             <Navitem title="Home" icon={CiHome} selected={sellected} setSellected={setSellected}  to="/"/>  
             <Navitem title="Create trip" icon={IoMdCreate} selected={sellected} setSellected={setSellected} to="/createtrip" />  
             <Navitem title="Itinerary" icon={GrSchedule} selected={sellected} setSellected={setSellected} to="/itinerary" />  
             <Navitem title="Budget" icon={LuWallet} selected={sellected} setSellected={setSellected} to="/budget" />  
             <Navitem title="Advise" icon={FaHandPointRight} selected={sellected} setSellected={setSellected} to="/advise" />  
         </Flex>
  
       </Flex>
    
     </>
  )
}

export default Sidebar