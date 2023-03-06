
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import SignInForm from "./routes/auth/signinform";
import SignUpForm from "./routes/auth/signupform";
import { Error } from "./routes/error/error";
import { CalcIMC } from "./routes/imc/calcimc";
import { ImcList } from "./routes/imc/imcListe";
import { ResultImc } from "./routes/imc/resultImc";

// const connected = (isloggedChecked) => {
//     const islogged = localStorage.getItem('islogged')
//     console.log(islogged)
  
//     if (islogged === isloggedChecked) {
//       return true
//     } else {
//       return redirect(`/`)
//     }
// }




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
          element : <CalcIMC/>,
        //   loader: () => connected('true')
        },
          {  path : "/result",
          element : <ResultImc/>,
        //   loader: () => connected('true')
        },
          {  path : "/listeImc",
          element : <ImcList/>,
        //   loader: () => connected('true')
        }
        ]
    }
])

export default router


