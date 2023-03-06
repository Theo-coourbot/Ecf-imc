import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signInAction } from "./authSlice"

const SignInForm = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const emailRef = useRef()
  const passwordRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const credentials = {
      email,
      password,
      returnSecureToken: true
    }

    emailRef.current.value = ""
    passwordRef.current.value = ""

   signIn(credentials)
  }
  const signIn = async (credentials) => {
    await dispatch(signInAction(credentials))
    
   

    navigate("/")
  }

  return (
    <div className="container bg-dark text-white">
    <form onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email: </label>
        <input type="email" id="email" required ref={emailRef} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password: </label>
        <input type="password" id="password" required ref={passwordRef} className="form-control" />
      </div>
      <div className="text-end">
        <button className='btn btn-primary mb-2'>Log-In</button>
      </div>
    </form>
    </div>
  )
}

export default SignInForm