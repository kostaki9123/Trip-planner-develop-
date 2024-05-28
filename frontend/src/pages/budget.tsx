import React from 'react'
import { Flex , Box} from '@chakra-ui/react'
import Dashboardlayout from '../components/DashboardLayout/dashboardlayout'
import Sxediagrama from '../components/budget/sxediagrama'
import AllExpenes from '../components/budget/allExpenes'
import Addexpense from '../components/budget/AddExpenseModal/addexpense'
import Amounts from '../components/budget/amounts/amounts'
import Setbudget from '../components/budget/setbuget/setbudget'
import Budgetnote from '../components/budget/budgetnote/budgetnote'
import Changecurrency from '../components/budget/budgetcurrency/changecurrency'
import Productprices from '../components/budget/productprices'
import Currency from '../components/budget/Currency/currency'

//dicede ui


const Budget = () => {
  return (
    <Dashboardlayout>
       <Box bgColor="rgb(40,44,53)" h="100%" p="30px" display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gridTemplateRows="1fr 1fr 1fr 1fr" gap="30px">
         <Box  bgColor="rgb(26,28,34)" gridColumn="1/2" gridRow="1/3" borderRadius="10px"><Amounts/></Box>
         <Flex  bgColor="rgb(26,28,34)"  gridColumn="1/3" gridRow="3/5" borderRadius="10px"> <AllExpenes/></Flex>
         <Flex  bgColor="rgb(26,28,34)"  gridColumn="2/4" gridRow="1/3" borderRadius="10px"  alignItems="center" justifyContent="center"><Sxediagrama/></Flex>
         <Flex  bgColor="rgb(26,28,34)"  gridColumn="4/5" gridRow="1/3" borderRadius="10px"  alignItems="center" justifyContent="center"><Setbudget/></Flex>
         <Flex  bgColor="rgb(26,28,34)"  gridColumn="4/5" gridRow="3/4" borderRadius="10px"  alignItems="center" justifyContent="center"><Budgetnote/></Flex>
         <Flex  bgColor="rgb(26,28,34)"  gridColumn="4/5" gridRow="4/5" borderRadius="10px"  alignItems="center" justifyContent="center"><Currency/></Flex>
         <Box  bgColor="rgb(26,28,34)" gridColumn="3/4" gridRow="3/5" borderRadius="10px"><Productprices/></Box>
       </Box>
    </Dashboardlayout>
  )
}

export default Budget