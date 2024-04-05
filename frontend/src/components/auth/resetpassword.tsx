import { Modal , ModalOverlay , ModalBody,Box, ModalContent,Flex ,FormControl,FormLabel,Input,FormHelperText ,ModalHeader , Text , ModalFooter ,Button } from "@chakra-ui/react"
import { MdOutlineLockReset } from "react-icons/md";
import { useState } from "react";
//form imports
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
//axios imports
import { axiosNocreadentials } from "../../api/axios";


type props = {
  isOpen : any
  onClose : any
}

type formData = {
  email: string
}

const Resetpassword = (props:props) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const shcema:ZodType = z.object({
    email: z.string().email(),
})

const { register , handleSubmit ,formState : { errors }} = useForm<formData>({resolver : zodResolver(shcema)});

const handleData:SubmitHandler<formData> = async (data) =>{
      
    try{
    // const res = await axiosNocreadentials.
    //if (email not found in db)
    //throw new Error("Failed to reset password. Please try again later.");
    //if succefully("Check your email for link ")
    //props.onClose()
    }catch(err){
    //setErrorMessage(err.message);
    }
  
    
  }

//show state error conditionally
  return (
    <>   
      <Modal isOpen={props.isOpen} onClose={props.onClose} >
        <ModalOverlay />
        <ModalContent pos="absolute" top="6%" w="450px" >
          <ModalBody h="600px" pb="0">
             <Flex h="80px"  alignItems="flex-end" justifyContent="center">
                 <MdOutlineLockReset  fontSize="40px"/>
             </Flex>
             <Flex h="80px"  flexDirection="column" alignItems="center" justifyContent="center">
                 <ModalHeader  m="0" p="3px" textAlign="center">Reset Password</ModalHeader>
                 <Text fontSize='md'>Enter your email to reset your password</Text>
             </Flex>
             <Flex h="120px"  flexDirection="column" alignItems="start" justifyContent="space-between" >
                <form onSubmit={handleSubmit(handleData)}> 
                  <FormControl  w="399px">
                      <FormLabel  mb="2px">Email</FormLabel >
                      <Input w="100%" type="text"px="12px" placeholder="Enter your email" {...register("email")}/>     
                      <FormHelperText color="red">{errors.email?.message}</FormHelperText> 
                   </FormControl>
                   <Button mt="10px" variant="solid" colorScheme="blue" borderRadius="5px" type="submit" w="100%">Reset Password</Button>
                </form>
             </Flex>
          </ModalBody>
          <ModalFooter  display="flex" alignItems="center" justifyContent="center">
            <Flex m="20px" >
               <Text>Remember your password?</Text>
               <Text onClick={props.onClose} cursor="pointer" textDecoration="underline" fontSize="15px" fontWeight="600" mx="4px">Go Back</Text>
             </Flex>
           </ModalFooter>     
        </ModalContent>
      </Modal>
    </>
  )
}

export default Resetpassword