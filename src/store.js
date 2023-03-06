import authSlice from "./routes/auth/authSlice";
import imcSlice from "./routes/imc/imcSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    auth: authSlice,
    imc: imcSlice
  }
})

export default store