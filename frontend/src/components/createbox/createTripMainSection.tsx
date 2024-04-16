import { Flex, Grid ,Box} from "@chakra-ui/react"
import SpinnerLoader from "../loaders/spinnerLoader"
import { useSelector } from "react-redux"
import { RootState  } from "../../Redux/store"
import FirstAddModal from "./form/firstAddModal"
import { Tpoint } from "../../Redux/Slices/PointsSlice"
import Point from "./point"
import Movingbox from "./movingbox"
import MyMapComponent from "./GoogleMap/map"
import App from "../../App"
import Googlemap from "./GoogleMap/mainmap"

type props = {
    isPending : boolean
}

const CreateTripMainSection = (props : props) => {
    const allpoints = useSelector((state : RootState) => state.points)
    const isPending = props.isPending

  return (
    <>
    { isPending ?
        <Flex  w="100%" h="43%" >
            <SpinnerLoader/>
        </Flex>
      :
      (
     allpoints?.length === 0 ? 
         ( <FirstAddModal/> )
    : (<>
           <Grid gridTemplateColumns={`70px repeat(${allpoints.length + 1}, 132px)`}  overflowX="auto" overflowY="hidden" gridTemplateRows="49px 69px" h="43%"  zIndex={1} >
            {
                   allpoints?.map(( point : Tpoint, key : number) => (
                       point.type === "point" 
                     ? <Point key={key} index={key} datalenght={allpoints.length} data={point}  />
                      : <Movingbox key={key} index={key} datalenght={allpoints.length} data={point}/>
                       )) }
           </Grid>
           <Flex  h="57%" position="absolute" top="43%" w="100%" >
                
           </Flex>
       </>
             )
       )
        

    
        
    }
    </>
  )
}

export default CreateTripMainSection
