import { Box, Button, FormHelperText, Flex, FormControl, FormLabel, Heading, Input, Stack ,FormErrorMessage } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { signin } from "../Redux/Slices/AuthSlice"
import { AppDispatch } from '../Redux/store'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../Redux/store'

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [problem , setProblem] = useState<string>("")
  const [email , setEmail] = useState<string>("")
  const [password , setPassword] = useState<string>("")
  const omonoia = useSelector((state: RootState) => state.auth.email)

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

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
    
    const apiUrl = 'http://localhost:5000/api/user/login'
    
    const data = {
      email ,
      password
    }
   
   // log in request
   const res = await axios.post(apiUrl,
       JSON.stringify(data) , 
       {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
       }
     )

   console.log("Res login" ,res)
   const accessToken = res?.data?.Token;
   // const refreshtoken

   //

   if (res.status === 201){
    setProblem(res.data.error)
   }

   if (res.status === 200){
    setLoading(false)
    setProblem("")
  
    localStorage.setItem("User" , res.data)

    //dispatch(signin({}))

    navigate("/")
   }

  setLoading(false)

}


  return (
    <Flex align="center" justify="center" width="100wh" height="100vh"  overflowY="hidden" overflowX="hidden" position="relative" >
       <Stack flexDir="column" justifyContent="center" align="center" mb="90px">
            <Heading mb="40px">Welcome</Heading>
            <Box width="320px">
               <form onSubmit={handleSubmit} >
                  <FormControl isRequired isInvalid={(problem !== "") && (problem === "Incorrect email")}>
                    <FormLabel>Email:</FormLabel>
                    <Input type="email" onChange={handleEmailChange}/>
                    {problem === "Incorrect email" &&
                    <FormErrorMessage>{problem}</FormErrorMessage>
                     } 
                   </FormControl>
                   <FormControl isRequired isInvalid={(problem !== "") && (problem === "Incorrect password")}>
                      <FormLabel>Password:</FormLabel>
                      <Input type="password"  onChange={handlePasswordChange}/> 
                      {problem === "Incorrect password" &&
                      <FormErrorMessage>{problem}</FormErrorMessage>
                       }        
                     <FormHelperText textAlign="right">
                       <Link>forgot password?</Link>
                     </FormHelperText>  
                    </FormControl>                
                    <Button borderRadius="10px" my="15px"  width="full" type="submit" variant="solid" colorScheme="blue"  >
                      {loading ? 'Submiting..': 'Log in'}
                    </Button>
                </form>
            </Box>
            <Box>
                New to us?{" "}
               <Link color="blue" href="/signup">
                     Sign Up
               </Link>
            </Box>
       </Stack>

      <Box as='div' backgroundColor='tomato' width="42.8%" borderRadius="20%" height={{  base: "0" ,sm: "0"  , md : "60%" ,lg: "75%" ,xl:"90%"}}
       bgGradient="linear(to top,cyan.300,blue.600)" pos="absolute" top={{md : "50%" , lg : "30%" ,xl: "25%"}} left={{ md : "-20%" , lg : "-20%" ,xl: "-20%"}} transform="rotate(60deg)" ></Box>
      <Box as='div' backgroundColor='tomato' width="42.8%" borderRadius="20%"  height={{  base: "0 ",sm: "0"  , md : "60%" ,lg: "75%" ,xl:"90%"}}
       bgGradient="linear(to bottom,cyan.300,blue.600)" pos="absolute" bottom={{ md : "40%" , lg : "30%" ,xl: "30%"}} right={{ md : "-25%" ,lg: "-20%" ,xl: "-20%"}} transform="rotate(40deg)"></Box>
    </Flex>
    
  )
}

export default SignIn