import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
  const isLogged = useSelector (state => state.auth.islogged)
    console.log(isLogged)
    // console.log(props.imc)
  if (isLogged ) {
    return (
      <>
        {props.children}
      </>
    )
  } else {
    
    return <Navigate to={`/`} />
  }
}

export default ProtectedRoute