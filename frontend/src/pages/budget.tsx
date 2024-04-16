import React from 'react'
import { Flex , Box} from '@chakra-ui/react'
import Dashboardlayout from '../components/DashboardLayout/dashboardlayout'
import DoughnutChart from '../components/budget/DoughnutChart'

const Budget = () => {
  return (
    <Dashboardlayout>
      <Flex bgColor="rgb(40,44,53)" h="100%" w="100%" flexDirection="column" alignContent="start" justifyContent="start" >
         <Flex border="1px solid red" h="50%" w="100%">
            <Box w="50%" h="100%" border="1px solid red">
                <DoughnutChart/>
            </Box>
            <Box w="50%" h="100%" border="1px solid red">sxediagramma</Box>
         </Flex>
         <Flex border="1px solid red" h="50%">
            <Box w="50%" h="100%" border="1px solid red">all expenses one by one</Box>
            <Box w="50%" h="100%" border="1px solid red">add new expenses / show possible expnses</Box>
         </Flex>
      </Flex>
    </Dashboardlayout>
  )
}

export default Budget