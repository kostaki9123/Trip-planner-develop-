import { Box ,Flex,Select,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup} from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { APIProvider } from '@vis.gl/react-google-maps';

import { Tpoint } from '../../../Redux/Slices/PointsSlice';
import { createPointBetween } from '../../../Redux/Slices/PointsSlice';
import { AppDispatch } from '../../../Redux/store';
import LocationInput from './locationinput';
import Example from './radiusbuttons/example';

type Props = {
    isOpen : any
    onClose : any
    index : number
  }
  
    type formData = {
      location?: string
      startdate : string
      time?: string
      moveicon? :  "Airplane" | "Train" |  "Car" | "Bus" | "Cycle" | "Ship" | string
      from? : string
      to? : string
      enddate? : string
    }

const Createpointbetween = (props : Props) => {
    const [selectedRadio, setSelectedRadio] = useState<"movingbox" | "point">('point');
    const [location , setLocation] = useState<google.maps.places.PlaceResult | null>(null)
    const [moveIcon , setMoveIcon] = useState<string>("")
    const [from , setFrom] = useState<google.maps.places.PlaceResult | null>(null)
    const [to , setTo] = useState<google.maps.places.PlaceResult | null>(null)
    const dispatch = useDispatch<AppDispatch>()

   

    const shcema:ZodType = z.object({
     location: z.string().optional(),
     startdate : z.string(),
     enddate : z.string().optional(),
     time : z.string().optional() ,
     moveicon : z.string().optional(), 
     from: z.string().optional() ,
     to: z.string().optional() ,
} )

const { register , handleSubmit ,formState : { errors }} = useForm<formData>({resolver : zodResolver(shcema)});
      
const handleData:SubmitHandler<formData> = async (data) =>{
                          
 if(selectedRadio === "point"){

 const Pointdatatosend : Tpoint = { 
    index : props.index,
    type : selectedRadio , 
    location : location,
    startdate :  data.startdate ,
    enddate : data.enddate
 }
 
 console.log("please" ,Pointdatatosend)

 dispatch(createPointBetween(Pointdatatosend))  //create pointbetween

}else{
 const Movingboxdatatosend : Tpoint = { 
   index : props.index,
   type : selectedRadio , 
   moveIcon : moveIcon,
   time : data.time , 
   startdate :  data.startdate ,
   from : from ,
   to : to ,

}

dispatch(createPointBetween(Movingboxdatatosend))  //create pointbetween

}

    props.onClose()
 }
  return (
    <>

    <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent zIndex={1} pos="absolute" top="11%" left="43%" >
    <form onSubmit={handleSubmit(handleData)}>
          <ModalHeader display="flex" alignItems="center" justifyContent="center" >
             <RadioGroup >
                <Example  onRadioChange={setSelectedRadio} defaultvalue={selectedRadio} />
             </RadioGroup>     
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
             { selectedRadio === "point" ? 
             <>
              <Box zIndex={9999}>
                <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                <LocationInput setLocation={setLocation} inputName='Location' deafultValue={null}/>
                </APIProvider>
              </Box>
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
            </>
              :
              <>
              <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                <LocationInput setLocation={setFrom} inputName='From' deafultValue={null}/>
                <LocationInput setLocation={setTo} inputName='To' deafultValue={null}/>         
               </APIProvider>
               <FormControl>
                 <FormLabel>Time</FormLabel>
                 <Input h="35px"  type="text" {...register("time")}/>     
                 <FormHelperText color="red">{errors.time?.message}</FormHelperText> 
               </FormControl> 
               <FormLabel>By</FormLabel> 
               <Select placeholder='Select option' mb="5px">
                    <option onClick={() => setMoveIcon("Airplane")} value='option1'>Airplane</option>
                    <option onClick={() => setMoveIcon("Train")} value='option2'>Train</option>
                    <option onClick={() => setMoveIcon("Car")} value='option3'>Car</option>
                    <option onClick={() => setMoveIcon("Bus")} value='option4'>Bus</option>
                    <option onClick={() => setMoveIcon("Cycle")} value='option5'>Cycle</option>
                    <option onClick={() => setMoveIcon("Ship")} value='option6'>Ship</option>
               </Select>     
               <FormControl>
                 <FormLabel>Date</FormLabel>
                 <Input h="35px"  type="date" {...register("startdate")} />   
                 <FormHelperText color="red">{errors.startdate?.message}</FormHelperText>   
              </FormControl>   
              </>
             }
          </ModalBody>
          <ModalFooter >
            <Button colorScheme='blue' mr={3} type="submit">
              Submit
            </Button>
            <Button  onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
            </form>
    </ModalContent>
    </Modal>
  </>
  )
}

export default Createpointbetween