import React from 'react'
import { Box, Grid } from "@chakra-ui/react";
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';

type Children  = {
    children: React.ReactNode
}

const Dashboardlayout = ({ children } : Children ) => {
  return (
  <Grid gridTemplateColumns="250px 1fr" gridTemplateRows="80px 1fr" minH="100vh">
    <Topbar />
    <Sidebar />
    <Box gridColumn="2/3" gridRow="2/3" top="80px" right="0" left="250px" bottom="0" color="white">
      {children}
    </Box>
  </Grid>
  )
}

export default Dashboardlayout