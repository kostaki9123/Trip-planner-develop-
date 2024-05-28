import { Box, Heading, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

  let client_id = "HYNoYYqzfxUUlgdEIAk8r4AhKwlGYpXK"
  let client_secret = "BxiNGwnHGeTWD9ft"

const Event = () => {
    const [data ,setData] = useState<[]>([])
    let accessToken = localStorage.getItem('accessToken');
    let expiryTimestamp = localStorage.getItem('expiryTimestamp');
    let expiryTimestampToNumber:number
    if(expiryTimestamp != null){
        expiryTimestampToNumber = parseInt(expiryTimestamp)
    }
    
const getToken = async () => {
     const currentTime = new Date().getTime()

     if(!accessToken || !expiryTimestamp || expiryTimestampToNumber < currentTime ){

     try {
        const response = await axios.post(
          "https://test.api.amadeus.com/v1/security/oauth2/token",
          `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}` ,
          {
             headers: {
                 'Content-Type' : "application/x-www-form-urlencoded"
             }
          }
        )
        
        const expiresInSeconds = response.data.expires_in

        const expirationTimeInMillis = currentTime + expiresInSeconds * 1000;
        const expirationTimeToString = expirationTimeInMillis.toString()
        localStorage.setItem('expiryTimestamp' , expirationTimeToString)
        localStorage.setItem('accessToken' , response.data.access_token )
     }catch (err){
        console.log("Access token error:" , err)
     }
  }   
}

const getData = async () => {
   try{
   const response = await axios.get(
   `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=2.160873&radius=1&page%5Blimit%5D=10&page%5Boffset%5D=0`,
   {
       headers: {
           'Authorization': `Bearer ${accessToken}`
   }}
   )
     setData(response.data.data)
   }catch(err){
       console.log("Get data error:" , err)
   }
}

useEffect(() => {
    getToken()
    getData()
},[])
  
console.log(data)
  return (
    <Box h="100%" border="2px solid lime" p="6px">
        <Heading  size="md" textAlign="center">Places</Heading>
        <Flex alignItems="center" justifyContent="center" flexDirection="column">{data.map((obj:any) => 
            <Box>{obj.category}</Box>
        )}</Flex>
    </Box>
  )
}

export default Event