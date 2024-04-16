import { useState } from "react";
import { Flex , Box , Text} from "@chakra-ui/react"
import { useLocation } from 'react-router-dom';
import BurgerItem from "./burgerItem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { LogoutAsync } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
//React icons
import { CiHome } from "react-icons/ci";
import { IoMdCreate } from "react-icons/io";
import { GrSchedule } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { FaHandPointRight } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

type props = {
    setHumburger : any
}

const HumbergerMenu = (props : props) => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const location = useLocation()
    const [sellected , setSellected] = useState<String>(location.pathname)

    const handleLogout = async () => {
        dispatch(LogoutAsync())
        navigate("/signin")
     }

  return (
    <Flex display={{base: "flex",sm: "flex", md: "flex", lg: "flex",xl: "none",xxl : "none" ,"2xl": "none" }}  alignItems="start" justifyContent="start" bgColor="rgb(26,28,34)" flexDir="column" position="absolute" top="0" right="0" h="100vh" left="0">
             <Flex h="100px" w="100%"   color="gray" alignItems="center" justifyContent="space-between" >
                  <Flex p="11px 15px" ml="10px" fontSize="23px" cursor="pointer" onClick={() => {props.setHumburger(false)}}>
                      <LiaTimesSolid />
                  </Flex>
                  <Flex h="50px" alignItems="center" mr="14px" p="4px" gap="7px" cursor="pointer" onClick={handleLogout}>
                      <IoLogInOutline fontSize="30px"/>
                      <Text>Log out</Text>
                  </Flex>
             </Flex>
             <Flex h="200px" w="100%"   color="gray" alignItems="center" justifyContent="center">
                    logo 
             </Flex>
             <Flex h="400px" w="100%"   color="gray" alignItems="center" justifyContent="center">
                 <Flex m="20px" w="100%" h="100%" gap="6px" flexDir="column">
                     <BurgerItem title="Home" icon={CiHome} selected={sellected} setSellected={setSellected}  to="/home"/>
                     <BurgerItem title="Create trip" icon={IoMdCreate} selected={sellected} setSellected={setSellected}  to="/createtrip"/>
                     <BurgerItem title="Itinerary" icon={GrSchedule} selected={sellected} setSellected={setSellected}  to="/itinerary"/>
                     <BurgerItem title="Budget" icon={LuWallet} selected={sellected} setSellected={setSellected}  to="/budget"/>
                     <BurgerItem title="Advise" icon={FaHandPointRight} selected={sellected} setSellected={setSellected}  to="/advise"/>
                 </Flex>
             </Flex>
    </Flex>
  )
}

export default HumbergerMenu