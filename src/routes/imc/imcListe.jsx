import { useEffect } from "react"
import {  useSelector } from "react-redux"
import { ImcDisplay } from "./imcDisplay"




export const ImcList = () => {
    const imcListe = useSelector (state => state.imc.imcStock)
    
    console.log (imcListe.length)
  
    
    return (
            <div className=" bg-dark text-light p-1 mt-3">
            {imcListe.length === 0 ? <p>Pas d'imc a la liste</p> : 
            imcListe.map(imc => <ImcDisplay key={imc.id} imcId={imc.id} />) }
            
            </div>
    )
}