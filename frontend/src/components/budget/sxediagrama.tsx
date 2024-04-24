import { Flex } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2';

const userdata = {
  labels: ["accomodaton","gas","food","trasportation",5,6,7,8,9],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 200, 40,69, 51, 20],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

const Sxediagrama = () => {
  return (
    <Flex w="90%" px="10px" h="100%">
         <Bar data={userdata}/>
    </Flex>
  )
}

export default Sxediagrama