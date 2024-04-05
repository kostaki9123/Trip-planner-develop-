import { Spinner , Box} from "@chakra-ui/react"

const Fullpageloading = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
      <Spinner
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='blue.500'
       size='xl'
       />
     </Box>
  )
}

export default Fullpageloading