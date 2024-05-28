import { Box ,Flex,Select,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup} from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createPointAsync } from "../../../Redux/Slices/PointsSlice";
import { Tpoint } from '../../../Redux/Slices/PointsSlice';
import { AppDispatch } from '../../../Redux/store';
import LocationInput from './locationinput';


import Example from './radiusbuttons/example';
import { APIProvider } from '@vis.gl/react-google-maps';

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

const Form = (props : Props) => {
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

      dispatch(createPointAsync(Pointdatatosend))

    }else{
        console.log("check moveicon form:" , moveIcon)
      const Movingboxdatatosend : Tpoint = { 
        index : props.index,
        type : selectedRadio , 
        moveIcon : moveIcon,
        time : data.time , 
        startdate :  data.startdate ,
        from : from ,
        to : to ,

     }

     dispatch(createPointAsync(Movingboxdatatosend))

    }
    
         props.onClose()
      }

  console.log("Location",location)
  return (
  <>

    <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent zIndex={1} pos="absolute" top="5.6%" left="43%" >
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
                <APIProvider apiKey="AIzaSyCAr2KKXk5lOGhbJQXkfLldvwnaXioCJ5Q">
              {/*LOCATION INPUT*/}  <LocationInput setLocation={setLocation} inputName='Location' deafultValue={null}/>
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
              <APIProvider apiKey="AIzaSyCAr2KKXk5lOGhbJQXkfLldvwnaXioCJ5Q">
                {/*LOCATION INPUT*/}   <LocationInput setLocation={setFrom} inputName='From' deafultValue={null}/>
                {/*LOCATION INPUT*/}   <LocationInput setLocation={setTo} inputName='To' deafultValue={null}/>         
              </APIProvider>
               <FormControl>
                 <FormLabel>Time</FormLabel>
                 <Input h="35px"  type="text" {...register("time")}/>     
                 <FormHelperText color="red">{errors.time?.message}</FormHelperText> 
               </FormControl>
               <FormLabel>By</FormLabel> 
               <Select placeholder='Select option'  mb="5px" onChange={(e) => setMoveIcon(e.target.value)}>
                    <option value='Airplane'>Airplane</option>
                    <option value='Train'>Train</option>
                    <option value='Car'>Car</option>
                    <option value='Bus'>Bus</option>
                    <option value='Cycle'>Cycle</option>
                    <option value='Ship'>Ship</option>
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

export default Form