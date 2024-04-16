import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import GMap from './map';
 
// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyCAr2KKXk5lOGhbJQXkfLldvwnaXioCJ5Q';

type props = {
  position ?: "absolute" | "relative"
}

// load google map script
const loadGoogleMapScript = (callback : any) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=geometry`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}


const Googlemap = (props : props) => {
  const [loadMap, setLoadMap] = useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);
 
  return (
    <Box  h="100%" w="100%"  > 
      {!loadMap ? <div>Loading...</div> : <GMap />}
   </Box>
  );
}
 
export default Googlemap;