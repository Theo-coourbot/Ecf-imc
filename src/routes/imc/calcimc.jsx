import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setImc } from "./imcSlice"

export const CalcIMC = () => {
    const weightRef = useRef()
  const sizeRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitFormHandler = (event) => {
    event.preventDefault()

    const weight = weightRef.current.value
    const size = sizeRef.current.value
  
    const imc = +weight / Math.pow(size,2)
    dispatch(setImc(imc))
    navigate(`/result`)
    
  }
   
   
   
   
   
    return (
        <>
        <div className="container bg-dark text-white mt-5">
    <form onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">Poid (en kg): </label>
        <input type="number" id="weight" required ref={weightRef} className="form-control" placeholder="90" />
      </div>
      <div className="mb-3">
        <label htmlFor="size" className="form-label">Taille (en m): </label>
        <input type="text" id="size" required ref={sizeRef} className="form-control" placeholder="1.70"/>
      </div>
      <div className="text-end">
        <button className='btn btn-primary mb-2'>valider</button>
      </div>
    </form>
    </div>


    
        </>
    )
} 