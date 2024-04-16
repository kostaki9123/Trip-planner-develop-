import { Box ,  Flex, Heading } from '@chakra-ui/react'
import {  useSelector} from 'react-redux'
import { RootState } from '../../Redux/store'
import Profilemodal from './profilemodal'
import ManTripLinkLarger909 from './manageTripLink/ManTripLinkLarger909'
import { useMediaQuery } from '@chakra-ui/react'
import ManTripLinkLess909 from './manageTripLink/ManTripLinkLess909'
//React icons
import { RiMenu2Line } from "react-icons/ri";
import { useState } from 'react'
import HumbergerMenu from './humbergerMenu'



const Topbar = () => {
   const [humburger , setHumburger] = useState<boolean>(false)
   const [isLargerThan1172] = useMediaQuery('(min-width: 1172px)')
   const [isLargerThan909] = useMediaQuery('(min-width: 909px)')
   const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
   const [isLargerThan545] = useMediaQuery('(min-width: 545px)')
   const fullname = useSelector((state: RootState) => state.auth.fullname)
  
  return (
    <Box  position="fixed" h="80px" w="100%" zIndex={9997}  justifyContent="space-between" bgColor="rgb(26,28,34)"  display="flex" alignItems="center" >  
     
      <Flex h="100%" minW="430px" >
          <Flex display={{base: "none",sm: "none", md: "none", lg: "none",xl: "flex",xxl : "flex" ,"2xl": "flex" }} w="249px" alignItems="center" justifyContent="center" >
              <Heading fontSize="19px" textAlign="center" color="white" >Trip planner</Heading>
          </Flex>
          <Flex display={{base: "flex",sm: "flex", md: "flex", lg: "flex",xl: "none",xxl : "none" ,"2xl": "none" }} color="white"  h="100%" w="70px" onClick={() =>{setHumburger(true)}} fontSize="24px" cursor="pointer" alignItems="center" justifyContent="center">
             <RiMenu2Line/>
          </Flex>
        
          <Flex  display={{base: "none",sm: "none", md: "flex", lg: "flex",xl: "flex",xxl : "flex" ,"2xl": "flex" }} alignItems="center" justifyContent="center" >
           <Heading  as="h5" size="md" color="white" px={{base: "0px",sm: "0px", md: "0px", lg: "0px", xl: "15px",xxl : "25px","2xl": "55px",}} fontFamily="sans-serif" >Demark-Germany-Belgium Trip</Heading>
          </Flex> 
       </Flex>
       
       
      
       <Flex position="absolute" top="0" right="0" h="100%"  align="center" justify="space-around"  >
         {isLargerThan909 ?
            <ManTripLinkLarger909/>
           :
            <ManTripLinkLess909/>
            }
          {isLargerThan1172 &&  <Heading as="h5" size="md" color="white" mx="15px" >{fullname}</Heading>
           }
          <Box pr="28px">
          <Profilemodal/>
          </Box>

       </Flex>
         {humburger &&
            <HumbergerMenu setHumburger={setHumburger}/>
         }
    </Box>
  )
}

export default Topbar