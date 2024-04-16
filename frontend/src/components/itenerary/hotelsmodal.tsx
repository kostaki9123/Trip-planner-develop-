import { Flex,Box,Text,Image, Textarea, Grid, Button,  } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";

const AccomodationBox = () => {
  const [notes, setNotes] = useState<boolean>(false)
  const textarea:any = useRef(null)
  const [text, setText] = useState<string>('');

  const toggleNotes = () => {
    setNotes(true)
  }

  const handleChange = (event : any) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textarea.current) {
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
    if (textarea.current) {
      textarea.current.focus();
    }
    
  }, [text ,notes])


  return (
    <Box  minHeight="150px" mb="10px"  p="10px" borderRadius="8px" fontWeight="400" bgColor="rgb(40,44,53)"    position="relative">
         <Text h="20%" w="100%" textAlign="center" fontSize="15px" mb="10px">Downtown hostel
         </Text>      
         <Box position="absolute" right="7px" top="8px" fontSize="22px" color="red" cursor="pointer"> 
            <MdDelete/>
         </Box>
         <Flex w="100%" h="75%" borderRadius="5px" mb="8px"  alignItems="start" justifyContent="flex-start" >
            <Box w="50%" h="110px" borderRadius="5px" p="3px" >
                 <Image src='/towndownHos.jpg'  borderRadius="5px" h="100%" w="100%" />
            </Box>
            <Flex h="110px"  w="50%" flexDir="column" alignItems="center" justifyContent="space-around" >
                 <Flex alignItems="start" justifyContent="flex-start"  borderRadius="7px" w="60%" h="33%" color="lime" _hover={{cursor: "pointer", bgColor: "rgb(26,28,34)"}}>
                     <Box w="30%" h="35px" display="flex" alignItems="center"  justifyContent="center">
                        <FaEye/>
                     </Box> 
                     <Text w="75%"  p="4px 16px 0px 0px"  h="100%" color="white" textAlign="center" >View</Text>
                 </Flex>
                 <Flex alignItems="start" justifyContent="flex-start" borderRadius="7px" w="60%" h="33%" color="lime" _hover={{cursor: "pointer", bgColor: "rgb(26,28,34)"}}>
                    <Box  w="25%" h="35px" display="flex" alignItems="center" justifyContent="center">
                       <FaDollarSign/>
                    </Box> 
                    <Text w="75%"  h="100%" color="white" textAlign="start" display="inline" p="7px">Add cost</Text>
                 </Flex>
            </Flex>
         </Flex>
         {notes ?
         <Box p="4px" >         
            <Textarea p="7px 10px 10px 10px" ref={textarea} minH="40px" onBlur={() => setNotes(false)} overflowY="hidden" resize="none" placeholder="Add notes,info e.c.t" value={text} onChange={handleChange} />
         </Box>
         :
         <Flex  h="10px">
           <Box position="absolute" bottom="4px" right="7px" onClick={toggleNotes}  cursor="pointer">
              <CiStickyNote fontSize="33px"/>
            </Box>
         </Flex>
         }
     </Box>
  )
}

export default AccomodationBox