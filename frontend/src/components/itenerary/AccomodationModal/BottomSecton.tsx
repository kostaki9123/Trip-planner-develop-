import { useEffect , useState , useRef } from "react";
import { Box , Textarea , Flex ,  } from "@chakra-ui/react";

import { CiStickyNote } from "react-icons/ci";

const BottomSecton = () => {
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
    <>
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
    </>
  )
}

export default BottomSecton