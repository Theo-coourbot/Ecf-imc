import { useSelector } from "react-redux"
import { ImcDisplay } from "./imcDisplay"



export const ImcList = () => {
    const imcListe = useSelector (state => state.imc.imcStock)
    console.log (imcListe)
    return (
            // <>
            // {imcListe.length === 0 ? <p>Pas d'imc a la liste</p> : 
            // imcListe.map(imc => <ImcDisplay key={imc.id}></ImcDisplay>) }
            // </>
            <h1>coucou</h1>
    )
}