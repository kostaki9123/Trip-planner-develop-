import { Box , Flex } from "@chakra-ui/react"


type Props = {
    index : number
}

const PositioOfLine = [
    {left: 20, top : 5 },
    {left:150 , top: 0 },
    {left:340 , top: 97},
  ]

const Uniteline = (Props : Props) => {

  return (
       <Box zIndex={0} position="absolute" top="50" left="90" h="100px" w="130px" >
         <svg viewBox="0 0 100 100"> 
            <path d="M 20 70 q 35 -75 75 -50" fill="none" stroke="white" strokeWidth="4" stroke-dasharray="7 5"/> 
         </svg>
       </Box>    
  )
}

export default Uniteline