import { Select } from '@chakra-ui/react'
import { useState } from 'react'

type props = {
  setExpenseCategory : any
}

const Expensescategorys = (props : props) => {

  return (
    <Select placeholder='Select option' onChange={(e) =>props.setExpenseCategory(e.target.value)}>
           <option value='Airplane'>Airplane</option>
           <option value='Train'>Train</option>
           <option value='Car'>Car</option>
           <option value='Bus'>Bus</option>
           <option value='Cycle'>Cycle</option>
           <option value='Ship'>Ship</option>
    </Select> 
  )
}

export default Expensescategorys