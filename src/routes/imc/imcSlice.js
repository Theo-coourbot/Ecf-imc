import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../firebaseConfig";


export const fetchImc = createAsyncThunk(
    "imc/fetchImc",
    async () => {
        const response = await fetch(`${BASE_DB_URL}imc.json`)
  
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des imc !")
        }
  
        const data = await response.json()
  
        const tmpArray = []
  
        for (const key in data) {
          tmpArray.push({id: key, ...data[key]})
        }
  
        return tmpArray
    }
  )
  
  export const addImc = createAsyncThunk(
    "imc/addimc",
    // Si l'on veut pouvoir accéder au state durant l'action asynchrone, il faut déplier le second paramètre de la fonction asynchrone et obtenir la fonction 'getState()'
    async (imcValue, {getState}) => {
      const user = getState().auth.user
      if (user) {
        const token = user.idToken
        if (token) {
          const response = await fetch(`${BASE_DB_URL}imc.json?auth=${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(imcValue)
          })
  
          if (!response.ok) {
            throw new Error("Il y a eu une erreur lors de la requête POST d'une imc !")
          }
  
          const data = await response.json()
  
          return {id: data.name, ...imcValue}
        }
      } 
    }
  )


const ImcSlice = createSlice({
   
    name: "imc",
  initialState: {
      
      imcStock: [],
      isLoading: false,
      error: null
    },
    reducers: {
        setImc(state, action) {
            state.imcStock = action.payload
           
        },
        addImcAction(state, action) {
            state.imcStock.push(action.payload)
          },
       
    },
    extraReducers: (builder) => {
     
        builder.addCase(fetchImc.fulfilled, (state, action) => {
          state.isLoading = false
          state.imcStock = action.payload
        })
    
     
    
    }
})



export const { setImc,addImcAction } = ImcSlice.actions

export default ImcSlice.reducer


