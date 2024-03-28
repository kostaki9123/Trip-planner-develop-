import { createSlice , PayloadAction } from "@reduxjs/toolkit"


interface CurrentUser {
      email : string 
      fullname : string
}

const initialState : CurrentUser = {
        email : "",
        fullname : "" ,
}

const AuthSlice = createSlice({
    name : "auth" , 
    initialState , 
    reducers : {
        signin : (state , action:PayloadAction<CurrentUser>) => {
            state.email = action.payload.email
        },
        logout : (state ) => {
            return initialState
        }
    }
    
})


export const { signin  , logout } = AuthSlice.actions

export default AuthSlice.reducer