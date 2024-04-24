import { FormHelperText,Box ,Flex,FormControl,FormLabel,Input,ModalFooter,Button,Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton } from '@chakra-ui/react'
import  {z , ZodType } from 'zod';
import {zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { axiosCurrencyRates } from "../../../api/axios";
import Currencydropdown from './CurrencyPriceInput/currencydropdown';
import { useEffect, useState } from 'react';
import Expensescategorys from './ExpensesCategoryInput/expensescategorys';


type props = {
  isOpen : any
  onClose : any
}

type formData = {
  price : string
  category : string 
}

const Addexpensemodal = (props : props) => {
  const [expenseCategory ,setExpenseCategory ] = useState<string>("")
  const [currentCurency , setcurrentCurency ] = useState<string>("EUR")

  
  const shcema:ZodType = z.object({
    location: z.string().optional(),
    startdate : z.string(),

})

//const getCurrencys = async () => {
//  try{
//     
//      const res  = await axiosCurrencyRates("https://v6.exchangerate-api.com/v6/87df55a74ead86ea7fcdf7bd/latest/USD")
//      console.log("Currencys :" , res)
//      setcurrencyOption([res.data.base_code , ...Object.keys(res.data.conversion_rates)])
//  }catch(err){
//       console.log("Error :" , err)
//  }
//  }



const { register , handleSubmit ,formState : { errors }} = useForm<formData>({resolver : zodResolver(shcema)});

//useEffect(() => {
//  getCurrencys()
//},[])

const handleData:SubmitHandler<formData> = async (data) =>{}

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent zIndex={1} pos="absolute" top="5.6%" left="43%" w="380px" >
    <form onSubmit={handleSubmit(handleData)}>
          <ModalHeader display="flex" alignItems="center" justifyContent="center" >
            Add expense 
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <FormControl  position="relative">
                 <FormLabel>Price</FormLabel>
                 <Currencydropdown setcurrentCurency={setcurrentCurency} currentCurency={currentCurency}/>
                 <Input h="39px" pl="60px"  type="number" {...register("price")}/>     
                 <FormHelperText color="red">{errors.price?.message}</FormHelperText> 
               </FormControl>
              <FormControl>
                 <FormLabel>Category</FormLabel>
                 <Expensescategorys setExpenseCategory={setExpenseCategory}/>
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

export default Addexpensemodal