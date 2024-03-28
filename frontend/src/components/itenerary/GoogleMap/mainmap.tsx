import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import GMap from './map';
 
// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg';



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


const App = () => {
  const [loadMap, setLoadMap] = useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);
 
  return (
    <Box  zIndex={999}  h="100%" > 
      {!loadMap ? <div>Loading...</div> : <GMap />}
   </Box>
  );
}
 
export default App;