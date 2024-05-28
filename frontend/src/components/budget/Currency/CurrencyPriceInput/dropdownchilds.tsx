import { Box , MenuItem , Image } from "@chakra-ui/react"
import { countrysFlag } from "../../../../utils/CountrysCurrencyInfo"

type props = {
  setcurrentCurency : any
  setcurrentSumbol : any
}



const Dropdownchilds = (props : props) => {
  return (
    <>
    {countrysFlag.map((obj ,key) => (
        <Box key={key}  onClick={() => {props.setcurrentCurency(obj.Code)
                                       props.setcurrentSumbol(obj.Symbol)
        }}>
          <MenuItem  display="flex" borderY="1px solid #DDDDDD">
              <Box h="30px" >{obj.Symbol}</Box>
              <Box textAlign="center"  w="95%">{obj.Code} </Box>
           </MenuItem>
        </Box>
    )) }
    </>

   
  )
}

export default Dropdownchilds