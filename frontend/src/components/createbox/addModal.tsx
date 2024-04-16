import { Box ,Flex,useDisclosure,Modal,ModalOverlay ,FormControl, FormLabel,FormHelperText,Input, ModalContent ,ModalHeader ,ModalBody , ModalCloseButton,ModalFooter,Button, RadioGroup} from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';

import { createPointAsync } from "../../Redux/Slices/PointsSlice";
import { MdAddLocationAlt } from "react-icons/md";
import { Tpoint } from '../../Redux/Slices/PointsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';

import Form from './form/form';



type Props = {
  index : number
}

const positiongrid = [
  {gridColumn: 2, gridRow : 3 },
  {gridColumn: 3, gridRow : 2 },
  {gridColumn: 4, gridRow : 3 },
  {gridColumn: 5, gridRow : 2 },
  {gridColumn: 6, gridRow : 3 },
  {gridColumn: 7, gridRow : 2 },
  {gridColumn: 8, gridRow : 3 },
  {gridColumn: 9, gridRow : 2 },
  {gridColumn: 10, gridRow : 3 },
  {gridColumn: 11, gridRow : 2 },
  {gridColumn: 12, gridRow : 3 },
  {gridColumn: 13, gridRow : 2 },
  {gridColumn: 14, gridRow : 3 },
  {gridColumn: 15, gridRow : 2 },
  {gridColumn: 16, gridRow : 3 },
  {gridColumn: 17, gridRow : 2 },
  {gridColumn: 18, gridRow : 3 },
  {gridColumn: 19, gridRow : 2 },
  {gridColumn: 20, gridRow : 3 },
  {gridColumn: 21, gridRow : 3 },
  ]

const AddModal = (props : Props) => {
     const { isOpen, onOpen, onClose } = useDisclosure()

 

  return (
  <>
    <Box  onClick={onOpen} zIndex={0} alignItems="center" justifyContent="center" display="flex" gridColumn={positiongrid[props.index].gridColumn} gridRow={positiongrid[props.index].gridRow} h="83px" w="89px">
      <Flex  align="center" justify="center" border="1px solid red"  borderRadius="50%" w="89px" h="83px" cursor="pointer">
          <MdAddLocationAlt style={{fontSize : "30px" , fontWeight : "bolder"}}/>
      </Flex>
    </Box>

    <Form onClose={onClose} isOpen={isOpen} index={props.index} />
   </>
   
  )
}

export default AddModal