import { Box  } from "@chakra-ui/react"

import TopSection from "./TopSection";
import CenterSection from "./CenterSection";
import BottomSecton from "./BottomSecton";

const AccomodationBox = () => {

  return (
    <Box  minHeight="150px" mb="10px"  p="10px" borderRadius="8px" fontWeight="400" bgColor="rgb(40,44,53)" position="relative">

          {/*MiddleSection  **/}
          <CenterSection/>

          {/*BottomSection  **/}
          <BottomSecton/>
     </Box>
  )
}

export default AccomodationBox