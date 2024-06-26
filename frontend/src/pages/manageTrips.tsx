import { Box } from "@chakra-ui/react"
import { Image ,Flex ,Heading,Tabs,TabList,Tab,TabIndicator,TabPanels,TabPanel} from "@chakra-ui/react"
import Tripmodal from "../components/managetrips/tripmodal"
import { IoMdAdd } from "react-icons/io";
import Profilemodal from "../components/topbar/profilemodal";
import Topbar from "../components/topbar/topbar";



const ManageTrips = () => {
  return (
  <Box bgColor="rgb(40,44,53)" minH="100vh">
      <Box  position="fixed" h="80px" w="100%" zIndex={9997} justifyContent="space-between" bgColor="rgb(26,28,34)"  display="flex" alignItems="center" >  
           <Flex  h="100%" w="248px" >
              <Flex w="100%" alignItems="center" justifyContent="center">
               <Heading fontSize="19px" textAlign="center" color="white" >Trip planner</Heading>
              </Flex>
           </Flex>
           <Flex alignItems="center" justifyContent="center" >
               <Heading as="h5" size="md" fontSize="30px" color="white" mr="59px" fontFamily="sans-serif">Manage trips</Heading>
           </Flex>
           <Flex  mr="30px" align="center" justify="space-around" position="relative" >        
              <Heading as="h5" size="md" color="white" mx="15px" >James maddison</Heading>
              <Profilemodal/>
           </Flex>   
       </Box>
     {/*
       finish 
     start main page */}
     <Flex  flexDir="column" w="100%" alignItems="start" justifyContent="start" gap="80px">
          <Flex  w="100%" alignItems="center" mt="80px" justifyContent="center" flexDir="column">
            <Box h="20%" w="74%" pt="20px" pb="10px" >
              <Heading as="h4" textAlign="left" color="white">My trips</Heading>
            </Box>
            <Box h="80%" w="74%"  position="relative">
                <Flex alignItems="center" justifyContent="center" cursor="pointer" zIndex="9996" bgColor="rgb(26,28,34)" position="absolute" top="-2" borderRadius="50%" right="1" h="60px" w="60px">
                    <Box  position="absolute" color="white" fontSize="29px">
                      <IoMdAdd/>
                    </Box>
                </Flex>
                <Tabs position="relative" variant="unstyled" color="white" h="87%">
                      <TabList>
                        <Tab>Upcoming trips</Tab>
                        <Tab>Previus trips</Tab>
                      </TabList>
                      <TabIndicator 
                        mt="-1.5px"
                        height="2px"
                        bg="yellow"
                        borderRadius="1px"
                      />
                      <TabPanels  minH="100%" mt="35px">
                        <TabPanel  minH="100%" flexWrap="wrap" display="flex" alignItems="start" justifyContent="start" gap="17px" px="0px" py="17px">
                          <Tripmodal/>
                          <Tripmodal/>
                          <Tripmodal/>
                          <Tripmodal/>
                        </TabPanel>
                        <TabPanel minH="100%" flexWrap="wrap" display="flex" alignItems="start" justifyContent="start" gap="17px" px="0px" py="17px">
                          <Tripmodal/>
                          <Tripmodal/>
                          <Tripmodal/>
                          <Tripmodal/>
                          <Tripmodal/>
                          <Tripmodal/>
                        </TabPanel>
                      </TabPanels>
                  </Tabs>
            </Box>
          </Flex>

          {/*
       finish 
     start main page 

          <Flex flexDir="column" w="100%"   alignItems="start" justifyContent="start" >
             <Flex  w="100%" alignItems="center" h="320px" justifyContent="center" flexDir="column">
                <Flex h="20%" w="74%" alignItems="center" pb="10px">
                   <Heading as="h4" fontSize="28px" fontFamily="sans-serif"  textAlign="left" color="white">Insparation</Heading>
                </Flex>
                <Flex h="20%" w="74%" alignItems="center" pb="10px">
                   <Heading as="h4" fontSize="20px" fontFamily="sans-serif"  textAlign="left" color="white">Best events in 2024</Heading>
                </Flex>
                <Flex h="100%" w="74%"  alignItems="center"  flexDirection="column">
                   <Box w="100%"  h="300px">
                      <CaptionCarousel/>
                   </Box>
                </Flex> 
                
             </Flex>
           </Flex>


          <Flex flexDir="column" w="100%"   alignItems="start" justifyContent="start" border="2px solid red">
             <Flex  w="100%" alignItems="center" h="300px" justifyContent="center" flexDir="column">
                <Box h="100%" w="74%" pt="20px" border="1px solid lime">
                 <Heading as="h4" fontSize="30px" textAlign="left" color="white">Footer</Heading>
                </Box>
             </Flex>
          </Flex>
          */}
     </Flex>
  </Box>  
  )
}

export default ManageTrips