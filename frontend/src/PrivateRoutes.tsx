import { Outlet, Navigate } from "react-router-dom";
import { Box, Grid } from "@chakra-ui/react";
import Sidebar from "./components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Redux/store";
import Topbar from "./components/topbar/topbar";
import { axiosPrivate } from "./api/axios";
import { signin } from "./Redux/Slices/AuthSlice";
import SignIn from "./pages/SignIn";
import Fullpageloading from "./components/loaders/fullpageloading";
import { useLocation } from "react-router-dom";
import ManageTrips from "./pages/manageTrips";

const PrivateRoutes = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  const dispatch = useDispatch();

  const [auth, setAuth] = useState<boolean | null>(null);
  

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axiosPrivate("/");
        if (res.status === 401) {
          setAuth(false);
        } else {
          // Update Redux state with user data
          dispatch(signin({ email: res.data.email, fullname: res.data.fullname }));
          setAuth(true);
        }
      } catch (error) {
        console.error("Error occurred during authentication check:", error);
        setAuth(false);
      }
    };

    authCheck();
  }, [dispatch]);

  if (auth === null) {
    return <Fullpageloading />;
  }
    
  return auth ? ( 
    <>
        <Outlet />
    </>

  ) : (
    <Navigate to="signin" />
  );
};

export default PrivateRoutes;
