import { Box ,Link } from "@chakra-ui/react"
import { Link as chakralink } from "react-router-dom"
//React icons
import { MdManageAccounts } from "react-icons/md";

const ManTripLinkLess909 = () => {
  return (
    <Box color="white" fontSize="30px" cursor="pointer">
       <Link as={chakralink} to="/" > <MdManageAccounts/></Link>
    </Box>
  )
}

export default ManTripLinkLess909