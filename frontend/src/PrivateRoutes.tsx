import { Outlet , Navigate } from "react-router-dom";
import { Box, Grid } from "@chakra-ui/react";
import Sidebar from "./components/sidebar/sidebar";
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import Topbar from "./components/topbar/topbar";


const PrivateRoutes = () => {  
      const omonoia = useSelector((state: RootState) => state?.auth.email)
      const [auth , setAuth] = useState<boolean>(false)
   
    return(
        auth ?
        <Grid gridTemplateColumns="250px 1fr" gridTemplateRows="80px 1fr" minH="100vh">
            <Topbar/>
            <Sidebar/>
            <Box  gridColumn="2/3" gridRow="2/3" top="80px" right="0" left="250px" bottom="0" color="white">
              <Outlet/> 
            </Box>
  
        </Grid>
         : <Navigate to='signin'/>
    )
}

export default PrivateRoutes