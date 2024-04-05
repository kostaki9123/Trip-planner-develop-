import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosPrivate } from "../../api/axios"

interface CurrentUser {
      email : string 
      fullname : string
}

const initialState : CurrentUser = {
        email : "",
        fullname : "" ,
}

const AuthSlice = createSlice({
    name : "Current User" , 
    initialState , 
    reducers : {
        signin : (state , action:PayloadAction<CurrentUser>) => {
            state.email = action.payload.email
            state.fullname = action.payload.fullname
        },
    },
     extraReducers: (builder) => {

         //create point
         builder.addCase(LogoutAsync.fulfilled, (state, action ) => {
            return initialState
         });
         builder.addCase(LogoutAsync.pending , (state , action) => {
           console.log("Log out...")
         })
         builder.addCase(LogoutAsync.rejected, (state, action) => {
           // Handle the API call failure here
           console.error("API call failed:", action.error.message);
         }); 
     }
})

export const LogoutAsync = createAsyncThunk(
    "Auth/logout",
    async () => {
      const url = "http://localhost:5000/logout";
  
      try {
        const response = await axiosPrivate.post(url);
        console.log("ρεσπονε" ,response)
        
        if (response.status === 200) {
          // na diagrafoun jwt cookies  
          console.log(response.data)
          return response.data; 
        } else {
          // Handle unexpected response status
          //an den petuxei to req ti tha kanoume
          return ("Unexpected response status: " + response.status);
        }
      } catch (err) {
        //an den petuxei to req ti tha kanoume
        return ("API request problem: " + err);
      }
    }
  );




export const { signin } = AuthSlice.actions

export default AuthSlice.reducer