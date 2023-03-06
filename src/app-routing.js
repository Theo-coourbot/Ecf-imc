
import { createBrowserRouter, redirect } from "react-router-dom";

import App from "./App";
import ProtectedRoute from "./compenant/protectedroute";
import SignInForm from "./routes/auth/signinform";
import SignUpForm from "./routes/auth/signupform";
import { Error } from "./routes/error/error";
import { CalcIMC } from "./routes/imc/calcimc";
import { ImcList } from "./routes/imc/imcListe";
import { ResultImc } from "./routes/imc/resultImc";






 const router = createBrowserRouter ([
    {
        path: "/",
        element : <App /> ,
        errorElement: <Error />,
        children : [
          {  path : "/signIn",
          element : <SignInForm/> 
        },
          {  path : "/signUp",
          element : <SignUpForm/> 
        },
          {  path : "/calculeIMC",
          element : <ProtectedRoute><CalcIMC/></ProtectedRoute>,
         
        },
          {  path : "/result",
          element : <ProtectedRoute><ResultImc/></ProtectedRoute>,
         
        },
          {  path : "/listeImc",
          element : <ProtectedRoute><ImcList/></ProtectedRoute>,
          
        }
        ]
    }
])

export default router


