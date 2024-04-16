import { Box } from "@chakra-ui/react"
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'

const userData = {
   labels : [] ,
    datasets: [
        {
          label: "Users Gained",
          data: [3000 , 2000],
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
}

const DoughnutChart = () => {
  return (
    <Box border="1px solid lime" h="100%">
        <Doughnut data={userData} datasetIdKey="1"/>
    </Box>
  )
}

export default DoughnutChart