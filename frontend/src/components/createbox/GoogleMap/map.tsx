import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { AppDispatch , RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';
import { Tmapos, Tpoint } from '../../../Redux/Slices/PointsSlice';

interface Coordinates {
  lat: number;
  lng: number;
}

const GMap = () => {
  const allpoints = useSelector((state : RootState) => state.points)
  const googleMapRef = useRef(null);
  let googleMap:any = null;

  let positionForMap:any = []
 
  allpoints.forEach((obj:Tpoint) => {
    if(obj.type === "point"){
       positionForMap.push(obj.mapos)
    }
 })

 // const markerList = [
 //   { lat:  34.97503429244256, lng: 33.84656912027186 }, 
 //   { lat: 55.67684355858067, lng: 12.579320447415471 },
 //   { lat: 52.52060470387229, lng: 13.40323405494021 },

 // ];
  
  useEffect(() => {
 
    const drawMarker = (obj:any) => {
      const marker = new window.google.maps.Marker({
        position: obj,
        map: googleMap
      });
      return marker;
    }
 
    const drawLine = (positionForMap : Coordinates[]) => {
      const line = new window.google.maps.Polyline({
        path: positionForMap,
        map: googleMap,
        strokeColor: "blue"
      });
      return line;
    }
 
    googleMap = initGoogleMap();
 
    var bounds = new window.google.maps.LatLngBounds();
    positionForMap.map((x: google.maps.LatLng | google.maps.LatLngLiteral) => {
      drawMarker(x)
      bounds.extend(x);
    });
    googleMap.fitBounds(bounds);
 
    drawLine(positionForMap);
  }, [allpoints]);
 
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current!, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
 
  return <Box w="100%" h="100%" ref={googleMapRef }></Box>
}
 
export default GMap;