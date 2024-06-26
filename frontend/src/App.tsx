import {BrowserRouter ,Routes , Route } from "react-router-dom";

//privates Routes
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

//Public Routes
import Home from "./pages/Home";
import Createtrip from "./pages/createtrip";
import Itinerary from "./pages/itinerary";
import Budget from "./pages/budget";
import ManageTrips from "./pages/manageTrips";
import Discover from "./pages/discover";

import PrivateRoutes from "./PrivateRoutes";
import { Suspense } from "react";
import FallbackLoading from "./components/loaders/fallbackloading";





function App() {
  // const userData = useSelector((state) => state.auth?.userData);
  return (
    <BrowserRouter> 
      <Suspense fallback={<FallbackLoading/>}>
       <Routes>
             <Route element={<PrivateRoutes/>}> 
                 <Route path="/" element={<ManageTrips/>} />              
                 <Route path="/home" element={<Home/>} />
                 <Route path="/createtrip" element={<Createtrip/>} />
                 <Route path="/itinerary" element={<Itinerary/>} />
                 <Route path="/budget" element={<Budget/>} />
                 <Route path="/discover" element={<Discover/>} />    
             </Route>
          <Route
             path="/signup"
             element={<SignUp/>}
          />
          <Route
             path="/signin"
             element={<SignIn loading={false}/>}
          />
      
       </Routes>
      </Suspense>
    </BrowserRouter>
    
  );  
}

export default App;
