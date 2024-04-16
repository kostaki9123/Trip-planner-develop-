import { Box , Flex } from "@chakra-ui/react"


type Props = {
    line : "up" | "down"
}

const Uniteline = (props : Props) => {

  return (
      <>
       {props.line === "up" ?
       <Box   h="30px" w="100px" >
         <svg viewBox="10 0 100 60"> 
            <path d="M 33 70 q 30 -65 75 -50" fill="none" stroke="white" strokeWidth="4" stroke-dasharray="7 5"/> 
         </svg>
       </Box> 
         :
       <Box  h="100px" w="100px"  transform="rotate(240deg)">
          <svg viewBox="10 0 100 70"> 
            <path d="M 33 70 q 30 -65 75 -50" fill="none" stroke="white" strokeWidth="4" stroke-dasharray="7 5"/> 
         </svg>
       </Box>
          }  
     </>  
  )
}

export default Uniteline