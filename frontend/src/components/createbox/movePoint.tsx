import {Modal,ModalOverlay,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper ,FormControl,NumberInput,NumberInputField, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup, Heading, FormHelperText} from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../Redux/store';
import { movepoint } from '../../Redux/Slices/PointsSlice';


export type Tdatatosend = {
  fromindex : number 
  toindex : number
}

//props types
type Props = {
   isOpen : any
   onClose : any
   datalenght : number
   index : number
}

// user input datatype
type formData = {
    position : number
  }

const MovePoint = (props : Props) => {
    const dispatch = useDispatch<AppDispatch>()

    const shcema:ZodType = z.object({
      position : z.string().optional(),
   } )

   const { register , handleSubmit ,formState : { errors }} = useForm<formData>({resolver : zodResolver(shcema)});

   const handleData:SubmitHandler<formData> = async (data) =>{

     let datatosend : Tdatatosend  = {
        fromindex :  props.index,
        toindex : data.position - 1
     }
 
     dispatch(movepoint(datatosend))


     props.onClose()
   }


  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent w="350px" pos="absolute" top="15%" left="43%">
     <form onSubmit={handleSubmit(handleData)}>   
      <ModalHeader textAlign="center">Move point</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
        <NumberInput defaultValue={1} min={1} max={props.datalenght} >
          <NumberInputField {...register("position")}/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
         </NumberInput>  
         <FormHelperText>
            {errors.position?.message}
         </FormHelperText>
        </FormControl>
       </ModalBody>
       <ModalFooter>
         <Button colorScheme='blue' mr={3} type="submit">
          Move
         </Button>
       </ModalFooter>
      </form>
    </ModalContent>
  </Modal>
  )
}

export default MovePoint