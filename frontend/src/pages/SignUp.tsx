import { Box, Button, FormErrorMessage, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'




const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [problem , setProblem] = useState<string>("")
  const [email , setEmail] = useState<string>("")
  const [fullname , setFullname] = useState<string>("")
  const [password , setPassword] = useState<string>("")

  const navigate = useNavigate();

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFullname(value)
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
  };

  const handleSubmit = async (e : React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      setLoading(true)

      const apiUrl = 'https://trip-planner-develop.vercel.app/api/user/signup'
    
      const data = {
        fullname , 
        email , 
        password
      }
      
     const res = await axios.post(apiUrl ,data )

     console.log(res)

     if (res.status === 201){
        setProblem(res.data.error)
        setLoading(false)
     }

     if (res.status === 200){
      setLoading(false)
      setProblem("")
      navigate('/signin')
     }
 
   
  }
  

  return (
    <Flex align="center" justify="center" position="relative" h="100vh" overflowY="hidden" overflowX="hidden">
    <Stack flexDir="column" justifyContent="center" align="center" mb="90px" >
         <Heading mb="40px">Register</Heading>
         <Box width="320px">
            <form action="" onSubmit={handleSubmit}>

               <FormControl   isRequired >
                 <FormLabel  >Fullname</FormLabel>
                 <Input  onChange={handleFullnameChange}/>
                </FormControl>

               <FormControl pt="5px"  isRequired isInvalid={(problem !== "") && (problem === "Email not valid" || problem ==="Email already in use")}>
                 <FormLabel  >Email:</FormLabel>
                 <Input type="email"onChange={handleEmailChange}/>
                 {problem === ("Email not valid" || "Email already in use" )&&
                    <FormErrorMessage>{problem}</FormErrorMessage>
                   } 
                </FormControl>

                <FormControl mt="5px" isRequired isInvalid={(problem !== "") && (problem === "Password is not strong enough")}>
                   <FormLabel>Password:</FormLabel>
                   <Input type="password" onChange={handlePasswordChange} />
                   {problem === "Password is not strong enough" &&
                    <FormErrorMessage>{problem}</FormErrorMessage>
                   }       
                 </FormControl>  
                         
                  <Button  type="submit" 
                   borderRadius="10px" my="15px"  width="full" variant="solid" colorScheme="blue"   >
                   {loading ? 'Submiting..': 'Submit'}
                 </Button> 
             </form>
         </Box>
         <Box>
                         Already have account?{" "}
               <Link color="blue" href="/signin">
                     Sign In
               </Link>
            </Box>
    </Stack>

   <Box as='div' backgroundColor='tomato' width="42.8%" borderRadius="20%" height={{  base: "0" ,sm: "0"  , md : "60%" ,lg: "75%" ,xl:"90%"}}
    bgGradient="linear(to top,cyan.300,blue.600)" pos="absolute" top={{md : "50%" , lg : "30%" ,xl: "25%"}} left={{ md : "-20%" , lg : "-20%" ,xl: "-20%"}}transform="rotate(60deg)"></Box>
   <Box as='div' backgroundColor='tomato' width="42.8%" borderRadius="20%" height={{  base: "0" ,sm: "0"  , md : "60%" ,lg: "75%" ,xl:"90%"}}
    bgGradient="linear(to bottom,cyan.300,blue.600)" pos="absolute" bottom={{ md : "40%" , lg : "30%" ,xl: "30%"}} right={{ md : "-25%" ,lg: "-20%" ,xl: "-20%"}} transform="rotate(40deg)"></Box>
 </Flex>
  )
}

export default SignUp