import { Editable,EditablePreview,EditableInput,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup, Heading} from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { APIProvider } from '@vis.gl/react-google-maps';

import { updatepoint } from '../../Redux/Slices/PointsSlice';
import { AppDispatch } from '../../Redux/store';
import { Tpoint } from '../../Redux/Slices/PointsSlice';
import Example from './form/radiusbuttons/example';
import LocationInput from './form/locationinput';


type Props = {
  isOpen : any
  onClose : any
  index : number
  data : Tpoint
}

type formData = {
  location?: string
  startdate : string
  time?: string
  moveicon? :  "Airplane" | "Train" |  "Car" | "Bus" | "Cycle" | "Ship" | string
  from? : string
  to? : string
}

const Edit = (props : Props) => {
  const [selectedRadio, setSelectedRadio] = useState<"movingbox" | "point">(props.data.type);
  const [location , setLocation] = useState<google.maps.places.PlaceResult | null>(null)
  const [from , setFrom] = useState<google.maps.places.PlaceResult | null>(null)
  const [to , setTo] = useState<google.maps.places.PlaceResult | null>(null)
  
     const dispatch = useDispatch<AppDispatch>()

     const shcema:ZodType = z.object({
      location: z.string().optional(),
      startdate : z.string(),
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
         location : props.data.location,
         startdate :  data.startdate ,
         _id : props.data._id
      }
       
      dispatch(updatepoint(Pointdatatosend))

    }else{
      const Movingboxdatatosend : Tpoint = { 
        index : props.index,
        type : selectedRadio , 
        moveIcon : data.moveicon,
        time : data.time , 
        startdate :  data.startdate ,
        from : from ,
        to : to ,
         _id : props.data._id
     }

     dispatch(updatepoint(Movingboxdatatosend))

    }
    
         props.onClose()
      }
  return (
      
    <Modal isOpen={props.isOpen} onClose={props.onClose} closeOnOverlayClick={false}>
    <ModalOverlay />
    <ModalContent pos="absolute" top="15%" left="43%">
    <form onSubmit={handleSubmit(handleData)}>
          <ModalHeader display="flex" alignItems="center" justifyContent="center"  >
             <RadioGroup >
                <Example  onRadioChange={setSelectedRadio} defaultvalue={selectedRadio} />
             </RadioGroup>     
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={0} pb={0}>
             { selectedRadio === "point" ? 
             <>
             <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                <LocationInput setLocation={setLocation} inputName='Location' deafultValue={props.data.location || null}/>
             </APIProvider>
              
            </>
              :
              <>
              <APIProvider apiKey="AIzaSyA5s9ii3P2sx3xwxZ8JgrrXxk3g-flRWMg">
                 <LocationInput setLocation={setFrom} inputName='From' deafultValue={props.data.from || null}/>
                 <LocationInput setLocation={setTo} inputName='To' deafultValue={props.data.to || null}/>
              </APIProvider>
               <FormControl>
                 <FormLabel>Time</FormLabel>
                 <Input type="text" {...register("time")} defaultValue={props.data.time}/>     
                 <FormHelperText color="red">{errors.time?.message}</FormHelperText> 
               </FormControl> 
               <FormControl>
                 <FormLabel>Moveicon</FormLabel>
                 <Input type="text" {...register("moveicon")} defaultValue={props.data.moveIcon}/>     
                 <FormHelperText color="red">{errors.moveicon?.message}</FormHelperText> 
               </FormControl>    
               
               
               
              </>
             }
             <FormControl>
                 <FormLabel>Date</FormLabel>
                 <Input type="date" {...register("startdate")} defaultValue={props.data.startdate}/>   
                 <FormHelperText color="red">{errors.startdate?.message}</FormHelperText>   
              </FormControl>  
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
  )
}

export default Edit