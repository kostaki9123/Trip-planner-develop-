import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { AppDispatch , RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';
import { Tmapos, Tpoint } from '../../../Redux/Slices/PointsSlice';
import { RiHotelBedFill } from "react-icons/ri";


interface Coordinates {
  lat: number;
  lng: number;
}

const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

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


  useEffect(() => {
 
    const drawMarker = (obj:any) => {
      const marker = new window.google.maps.Marker({
        position: obj,
        map: googleMap,
        icon : image
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
      zoom: 8 ,
    });
  }
 
  return <Box w="100%" h="100%" ref={googleMapRef }></Box>
}
 
export default GMap;