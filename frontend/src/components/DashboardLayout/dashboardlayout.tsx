import React from 'react'
import { Box, Grid ,useMediaQuery} from "@chakra-ui/react";
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';

type Children  = {
    children: React.ReactNode
}

const Dashboardlayout = ({ children } : Children ) => {
  
  return (
  <Grid gridTemplateColumns="250px 1fr" position="relative" overflowX="hidden" gridTemplateRows="80px 1fr" minH="100vh" w="100%" >
    <Topbar />
    <Sidebar />
    <Box gridColumn= {{base: "1/3",sm: "1/3", md: "1/3", lg: "1/3",xl: "2/3","2xl": "2/3" }} position="absolute" bottom="0" right="0" top="0" left="0" gridRow="2/3"  color="white">
      {children}
    </Box>
  </Grid>
  )
}

export default Dashboardlayout