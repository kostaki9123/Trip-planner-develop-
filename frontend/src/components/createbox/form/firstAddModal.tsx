import { Modal ,Button,ModalFooter,Box,Input,useDisclosure ,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,FormControl,FormLabel, FormHelperText} from "@chakra-ui/react"
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import {  useDispatch  } from "react-redux";
import { createPointAsync } from "../../../Redux/Slices/PointsSlice";
import { AppDispatch } from "../../../Redux/store";
import { Tpoint } from "../../../Redux/Slices/PointsSlice";
import LocationInput from "./locationinput";
import { APIProvider } from '@vis.gl/react-google-maps';


type formData = {
  location : google.maps.places.PlaceResult | null
  startdate : string
  enddate : string | null
}


const FirstAddModal = () => {
const [location , setLocation] = useState<google.maps.places.PlaceResult | null>(null)
const { isOpen, onOpen, onClose } = useDisclosure()
const dispatch = useDispatch<AppDispatch>()
  
const shcema:ZodType = z.object({
  location: z.string().optional(),
  startdate : z.string().refine((data) => data.trim().length > 0, {
    message: "Start date is required",
  }),
  enddate : z.string().optional()
})

const { register , handleSubmit ,formState : { errors }} = useForm<formData>({resolver : zodResolver(shcema)});
  
 const handleData:SubmitHandler<formData> = async (data) =>{
                                                         
  const datatosend : Tpoint = { 
     type : "point" , 
     location : location,
     index : 0,
     startdate :  data.startdate,
     enddate : data.enddate || null
  }

     dispatch(createPointAsync(datatosend))

     onClose()
  }
 
  return (
    <>
    <Button onClick={onOpen} zIndex={1}  position="absolute" top="45%" left="43%">Start your planning</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent position="absolute" top="20%" left="45%">
        <form onSubmit={handleSubmit(handleData)}>
          <ModalHeader textAlign="center">
            First Point
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>          
              <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                <LocationInput setLocation={setLocation} inputName="Location" deafultValue={null}/>
              </APIProvider>
              <FormControl>
                <Box  h="40px" display="flex" flexDirection="row" alignItems="start"  justifyContent="space-between">
                  <Box  h="100%">
                    <FormLabel>Start Date</FormLabel>
                    <Input type="date"  h="100%" {...register("startdate")} /> 
                  </Box>
                  <Box h="100%">
                    <FormLabel>End Date - {"Optional"}</FormLabel>
                    <Input type="date"  h="100%"  {...register("enddate")} /> 
                  </Box>           
                </Box>
              </FormControl>     
          </ModalBody>
          <ModalFooter >
            <Button colorScheme='blue' mr={3} type="submit">
              Submit
            </Button>
            <Button  onClick={onClose}>Cancel</Button>
          </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FirstAddModal