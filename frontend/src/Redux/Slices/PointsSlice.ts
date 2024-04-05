import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Tdatatosend } from "../../components/createbox/movePoint";
import { axiosPrivate } from "../../api/axios";

export type Tmapos = {
    lat: number
    lng: number
}

export type Tpoint = {
  type : "movingbox" | "point"
  startdate : string
  enddate ?: string | null
  index : number
  location? : google.maps.places.PlaceResult | null
  time? : string
  moveIcon ?: "Airplane" | "Train" |  "Car" | "Bus" | "Cycle" | "Ship" | string
  mapos ? : Tmapos | undefined
  from? : google.maps.places.PlaceResult | null
  to? : google.maps.places.PlaceResult | null
  __v ?: number
  _id ?: string 
};


const initialState: Tpoint[]  = [
     
];



const PointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //create point
    builder.addCase(createPointAsync.fulfilled, (state, action : PayloadAction<Tpoint>) => {
       state.push(action.payload)
    });
    builder.addCase(createPointAsync.pending , (state , action) => {
      console.log("pending koumpare")
    })
    builder.addCase(createPointAsync.rejected, (state, action) => {
      // Handle the API call failure here
      console.error("API call failed:", action.error.message);
    }); 

    //fetch data
    builder.addCase(fetchdata.fulfilled, (state, action: PayloadAction<Tpoint[]>) => {
      return action.payload;
    });
    builder.addCase(fetchdata.pending, (state, action) => {
      console.log("Fetching points...");
    });
    builder.addCase(fetchdata.rejected, (state, action) => {
      console.error("API call failed:", action.error.message);
    });

    //delete point
    builder.addCase(deletepoint.fulfilled, (state, action: PayloadAction<string>) => {
      return state = state.filter(object => object._id !== action.payload)
    });
    builder.addCase(deletepoint.pending, (state, action) => {
      console.log("Deleting point...");
    });
    builder.addCase(deletepoint.rejected, (state, action) => {
      console.error("API call delete point failed:", action.error.message);
    });

    // update point
    builder.addCase(updatepoint.fulfilled, (state, action: PayloadAction<Tpoint>) => {
      const updatePoint = action.payload
      const indexToUpdate = state.findIndex(point => point._id  === updatePoint._id )
      if (indexToUpdate  !== -1){
           state[indexToUpdate] = updatePoint 
      }
      return  state
    });
    builder.addCase(updatepoint.pending, (state, action) => {
      console.log("Updating point...");
    });
    builder.addCase(updatepoint.rejected, (state, action) => {
      console.error("API call update point failed:", action.error.message);
    });

     //move point
     builder.addCase(movepoint.fulfilled, (state, action: PayloadAction<Tdatatosend>) => {
      if(action.payload.fromindex === action.payload.toindex){
        return state
      }

      if(action.payload.fromindex < action.payload.toindex){
        let newarray = state.map(point =>{
        if(point.index === action.payload.fromindex){
           return {...point , index : action.payload.toindex}
        }
        if(point.index > action.payload.fromindex && point.index <= action.payload.toindex){  
           return {...point , index: point.index - 1 }
         } 
           return {...point}
          })
          const propertyToSortBy = 'index';
          
          let newArraySorted = newarray.sort((a,b)=> a[propertyToSortBy] - b[propertyToSortBy])

        state = newArraySorted

        return state      
      }else{
        let newarray = state.map(point =>{
          if(point.index === action.payload.fromindex){
            return {...point , index : action.payload.toindex}
          }
          if(point.index < action.payload.fromindex && point.index >= action.payload.toindex){  
             return {...point , index: point.index + 1 }
           } 
             return {...point}
           })
          const propertyToSortBy = 'index';
          
          let newArraySorted = newarray.sort((a,b)=> a[propertyToSortBy] - b[propertyToSortBy])
          
          state = newArraySorted

          return state  
      }
        
     });
     builder.addCase(movepoint.pending, (state, action) => {
       console.log("Moving point...");
     });
     builder.addCase(movepoint.rejected, (state, action) => {
       console.error("API call update point failed:", action.error.message);
     });

  // create point between
     builder.addCase(createPointBetween.fulfilled, (state, action : PayloadAction<Tpoint>) => {
        let newarray : Tpoint[] = state.map(point =>{
          if(point.index >= action.payload.index){
             return {...point , index : point.index + 1}
          }
             return {...point}
            })

        newarray.push(action.payload)   

        const propertyToSortBy = 'index';
          
        let newArraySorted = newarray.sort((a,b)=> a[propertyToSortBy] - b[propertyToSortBy])

        state = newArraySorted

        return state 
      
      });
      builder.addCase(createPointBetween.pending , (state , action) => {
        console.log("pending koumpare")
      })
      builder.addCase(createPointBetween.rejected, (state, action) => {
        // Handle the API call failure here
        console.error("API call failed:", action.error.message);
      }); 
      
},
});

export const createPointAsync = createAsyncThunk(
  "points2/addpoint",
  async (newpoint: Tpoint, { rejectWithValue }) => {
    const url = "http://localhost:5000/createpoint";

    try {
      const response = await axiosPrivate.post(url, newpoint);
      console.log("ρεσπονε" ,response)
      // Ensure that the API call is successful before returning the response
      if (response.status === 200) {
        console.log(response.data)
        return response.data; // new updated points array or any other data you need
      } else {
        // Handle unexpected response status
        console.log("π")
        return rejectWithValue("Unexpected response status: " + response.status);
      }
    } catch (err) {
      // Handle network or other errors
      console.log("π")
      return rejectWithValue("API request problem: " + err);
    }
  }
);

   export const fetchdata = createAsyncThunk(
       "points/getpoints",
       async ()  => {
       const res  = await axiosPrivate.get<Tpoint[]>("http://localhost:5000/getpoints")
       console.log("Real res:",res)      

       return res.data
      }
)

   export const deletepoint = createAsyncThunk(
       "points/deletepoint",
       async (id : string , { rejectWithValue })  => {
      
       try{
       
       const res  = await axiosPrivate.delete(`http://localhost:5000/deletepoint/${id}`)
       
      if (res.status === 200) {
    
      return id;
      } else {
        console.error("Unexpected response status:", res.status);
        return rejectWithValue("Unexpected response status: " + res.status);
      }

       }catch(err){
         return rejectWithValue("API request problem: " + err);
       }
    }
)

   export const updatepoint = createAsyncThunk(
       "points/updatepoint",
       
       async (newpoint:Tpoint , { rejectWithValue })  => {

      try{
        console.log(newpoint)
       const res  = await axiosPrivate.put(`http://localhost:5000/updatepoint`, newpoint)

       if (res.status === 200) {
       
        return newpoint;
        } else {
          console.error("Unexpected response status:", res.status);
          return rejectWithValue("Unexpected response status: " + res.status);
        }
      }
      catch(err){
        return rejectWithValue("API request problem: " + err);
      }
    }
)


    export const movepoint = createAsyncThunk(
       "points/movepoint",
       async (moveinfo :Tdatatosend  , { rejectWithValue }) => {
        try{
         
          const res = await axiosPrivate.put(`http://localhost:5000/movepoint` , moveinfo)
          console.log("res from move" ,res)
         if (res.status === 200) {
       
         return moveinfo;
         } else {
           console.error("Unexpected response status:", res.status);
           return rejectWithValue("Unexpected response status: " + res.status);
         }
   
          }catch(err){
            return rejectWithValue("API request problem: " + err);
          }
       }
      
    )

    export const createPointBetween = createAsyncThunk(
      "points/createpointbetwwen",
      async (newpoint: Tpoint, { rejectWithValue }) => {
        const url = "http://localhost:5000/createpointbetwwen";
    
        try {
          const response = await axiosPrivate.post(url, newpoint);
          console.log("ρεσπονε" ,response)
          // Ensure that the API call is successful before returning the response
          if (response.status === 200) {
            console.log(response.data)
            return response.data; // new updated points array or any other data you need
          } else {
            // Handle unexpected response status
            console.log("π")
            return rejectWithValue("Unexpected response status: " + response.status);
          }
        } catch (err) {
          // Handle network or other errors
          console.log("π")
          return rejectWithValue("API request problem: " + err);
        }
      }
    );

export default PointSlice.reducer;
