import { Modal ,Button,ModalFooter,Box,Input,useDisclosure ,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,FormControl,FormLabel, FormHelperText, Flex} from "@chakra-ui/react"
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import {  useDispatch  } from "react-redux";
import { createPointAsync } from "../../../Redux/Slices/PointsSlice";
import { AppDispatch } from "../../../Redux/store";
import { Tpoint } from "../../../Redux/Slices/PointsSlice";
import Createpointbetween from "./createpointbetween";
import Form from "./form";

const FirstAddModal = () => {
const modalform = useDisclosure()

  return (
    <Flex h="100%" w="100%"  alignItems="center" justifyContent="center">
       <Button onClick={modalform.onOpen} zIndex={1}>Start your planning</Button>
       <Form isOpen={modalform.isOpen} onClose={modalform.onClose} index={0}/>
    </Flex>


  )
}

export default FirstAddModal