import { Flex , Box} from "@chakra-ui/react"
import { useState , useEffect } from "react";


// case 1 uparxei trip 
//take current daytime and date trip start
//found in how long trip start and display it 
//current date     stardate trips 
//exaple today 08/3: 10:00    trip start at: 15/3 12:00
 
//case 2 den yparxei trip
//display comment "There is no upcoming tips"

const Countdown = () => {

    const targetDate:any = new Date('2024-12-31T00:00:00Z');

    // Initialize state for days, hours, minutes, and seconds
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      // Calculate the initial countdown values
      const calculateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;
  
        if (difference > 0) {
          const dayInMillis = 24 * 60 * 60 * 1000;
          const hourInMillis = 60 * 60 * 1000;
          const minuteInMillis = 60 * 1000;
  
          const remainingDays = Math.floor(difference / dayInMillis);
          const remainingHours = Math.floor((difference % dayInMillis) / hourInMillis);
          const remainingMinutes = Math.floor((difference % hourInMillis) / minuteInMillis);
          const remainingSeconds = Math.floor((difference % minuteInMillis) / 1000);
  
          setDays(remainingDays);
          setHours(remainingHours);
          setMinutes(remainingMinutes);
          setSeconds(remainingSeconds);
        } else {
          // If the countdown has reached zero, clear the interval
          clearInterval(intervalId);
        }
      };
  
      // Update the countdown every second
      const intervalId = setInterval(calculateCountdown, 1000);
  
      // Calculate the initial countdown values
      calculateCountdown();
  
      // Cleanup: Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [targetDate]);
  

  return (
    <Flex alignItems="center" justifyContent="center" border="2px solid lime" h="100px" w="80%">
       <Box  border="2px solid red" flexGrow={1} h="60px">
          <h4>Das</h4>
           {days}
        </Box>
       <Box  border="2px solid red" flexGrow={1} h="60px">
          <h4>Hrs</h4>
          {hours < 10 ?<>0{hours}</> : <>{hours}</> }
        </Box>
       <Box  border="2px solid red" flexGrow={1} h="60px">
          <h4>min</h4>
           {minutes < 10 ?<>0{minutes}</> : <>{minutes}</> }
        </Box>
       <Box  border="2px solid red" flexGrow={1} h="60px">
          <h4>sec</h4>
          {seconds < 10 ?<>0{seconds}</> : <>{seconds}</> }
        </Box>
       
    </Flex>
  )
}

export default Countdown