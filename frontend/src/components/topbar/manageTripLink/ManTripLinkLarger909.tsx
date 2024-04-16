import { Box , Button, Link  } from "@chakra-ui/react" 
import { Link as chakralink } from "react-router-dom"


const ManTripLinkLarger909 = () => {
  return (
    <Box>
      <Box  as={Button} w="225px" _active={{bg : "rgb(40,44,53)"}} _hover={{bg : "rgb(40,44,53)"}} bgColor="rgb(40,44,53)" color="rgba(142,142,142,255)" mx="12px" >
         <Link as={chakralink} to="/"  _hover={{textDecoration: "none"}}>Manage Trips</Link>
      </Box>
    </Box>
  )
}

export default ManTripLinkLarger909