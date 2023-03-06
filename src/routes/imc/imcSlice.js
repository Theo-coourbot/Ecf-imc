import { createSlice } from "@reduxjs/toolkit";


const ImcSlice = createSlice({
   
    name: "imc",
  initialState: {
      
      imcStock: null,
      isLoading: false,
      error: null
    },
    reducers: {
        setImc(state, action) {
            state.imcStock = action.payload
           
        },
       
    }
})


export const { setImc } = ImcSlice.actions

export default ImcSlice.reducer


