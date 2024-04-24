import { Box , MenuItem , Image } from "@chakra-ui/react"
import { countrysFlag } from "../../../../utils/CountrysCurrencyInfo"

type props = {
  setcurrentCurency : any
}


const Dropdownchilds = (props : props) => {
  return (
    <>
    {countrysFlag.map((obj ,key) => (
        <Box key={key}  onClick={() => {props.setcurrentCurency(obj.code)}}>
          <MenuItem  display="flex" borderY="1px solid #DDDDDD">
              <Image  h="30px" src={obj.flag}/>
              <Box textAlign="center"  w="95%">{obj.code} </Box>
           </MenuItem>
        </Box>
    )) }
    </>

   
  )
}

export default Dropdownchilds