
import './App.css';

import {  Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from './routes/auth/authSlice';
import { fetchImc } from './routes/imc/imcSlice';
import { useEffect } from 'react';




function App() {
  const isLogged = useSelector (state => state.auth.islogged)
  const user = useSelector (state => state.auth.user)
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  // console.log(isLogged)
  // console.log(user)
  
  const disconect = () => {
    dispatch(removeUser())
    navigate(`/`)
  }
  useEffect(() => {
        dispatch(fetchImc())
      }, [])
  
  return (
    <>
    <nav>
    <div className=" d-flex justify-content-between bg-dark text-white  ">
    
        <div className="logo d-flex">
        <i className="bi bi-backspace-reverse-fill fs-2 mx-2 "></i>
     <Link to={`/`} className="text-white">
    <h1 className="d-flex">Calcule d'<span className='text-primary'> IMC </span></h1>
    </Link>
   
    </div>
      {!isLogged ?
    <div className="d-flex  ">
          <NavLink to={`/signIn`}  className="btn btn-outline-info m-2" >log-in</NavLink>
    <NavLink  to={`/signUp`} className="btn btn-outline-success m-2" > sign-up</NavLink> 
    </div> : <div className='d-flex'><button className="ms-auto btn btn-outline-danger m-2" onClick={disconect}>Sign-Out </button>
    <NavLink to={`/listeImc`} className="ms-auto btn btn-outline-info m-2">liste Imc</NavLink>
    <NavLink to={`/calculeIMC`} className="ms-auto btn btn-outline-success m-2">calcule mon IMC</NavLink></div>
      }
        
    
    
    </div>
</nav>
{isLogged ?<div className=' d-flex justify-content-center  mt-4 '> <NavLink to={`/calculeIMC`} className="btn btn-success">calcule de mon IMC </NavLink> </div> :<div className='d-flex justify-content-center  mt-4 fs-3'>conecter-vous pour calculer votre IMC </div>}

 
 

<Outlet />
</>


);
}

export default App;
