import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice"
import PointsSlice from "./Slices/PointsSlice";

export const store = configureStore({
  reducer: {
      auth :  authReducer ,
      points : PointsSlice
  },
})

export type  RootState = ReturnType<typeof store.getState>  //type of state
export type  AppDispatch = typeof store.dispatch  // 