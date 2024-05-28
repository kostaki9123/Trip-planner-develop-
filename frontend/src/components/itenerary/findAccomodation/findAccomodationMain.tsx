import { Flex,Box,Menu,MenuButton,MenuList,MenuItem,Button, Image} from '@chakra-ui/react'
import { useEffect ,useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const FindAccomodationMain = () => {
    const [placeId, setPlaceId] = useState<string>('');
    const [placeDetails, setPlaceDetails] = useState(null);
    const [error, setError] = useState<any>(null);
    const [type,setType] = useState<string>("Hotels")
  
    const apikey = 'AIzaSyCAr2KKXk5lOGhbJQXkfLldvwnaXioCJ5Q';
    const url = `https://places.googleapis.com/v1/places/ChIJN1t_tDeuEmsRUsoyG83frY4?fields=*&key=${apikey}`
         
        const fetchData = async () => {
      
        const requestOptions = {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': apikey,
            'X-Goog-FieldMask': 'places.displayName,places.websiteUri,places.types,places.id'
          },
        };
      
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log("data" ,data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


      useEffect(() => {
        fetchData()
      },[])
  return (
    <Box  w="100%">
        <Flex border="2px solid red" minH="160px" p="6px">
            <Flex h="45px" >
               <Menu>
                   <MenuButton py="4px" as={Button} rightIcon={<FaAngleDown />}>
                        {type}
                   </MenuButton>
                   <MenuList>
                      <MenuItem onClick={() => setType("Hotels")}>Hotels</MenuItem>
                      <MenuItem  onClick={() => setType("Hostels")}>Hostels</MenuItem>
                   </MenuList>
               </Menu>
            </Flex>
        </Flex>

        <Box h="200px"  border="2px solid red">
            accomodation all hotel-hostel 
        </Box> 
       
    </Box>
  )
}

export default FindAccomodationMain