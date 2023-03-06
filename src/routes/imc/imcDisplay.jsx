import { useSelector } from "react-redux"




export const ImcDisplay = ({imcId}) => {
    const imcinfo = useSelector(state=>state.imc.imcStock).find(imc => imc.id === imcId )
    console.log(imcinfo.weight)
    return (
           <div className="border border-info m-3">
            <h2>Fait le {imcinfo.date}</h2>
            <hr />
            <div className="row col fs-4">
                <p className="col-3">Poids :{imcinfo.weight}</p>
                <p  className="col-3">Taille :{imcinfo.size}</p>
                
                {imcinfo.imc < 18.5 ?<p  className="col-6 text-info">imc: {Math.floor(imcinfo.imc)} Poids insuffisant</p> 
 
     : imcinfo.imc >= 18.5 && imcinfo.imc <= 24.99 ?  <p  className="col-6 text-success">imc: {Math.floor(imcinfo.imc)} Poids normal</p>
   

     :  imcinfo.imc >= 25 && imcinfo.imc<= 29.99 ?<p  className="col-6 text-info">imc: {Math.floor(imcinfo.imc)} Embonpoint</p>
 
     :imcinfo.imc >= 30 && imcinfo.imc<= 34.99 ? <p  className="col-6 text-primary">imc: {Math.floor(imcinfo.imc)} Obésité classe I</p>
    
     :imcinfo.imc >= 35 && imcinfo.imc<= 39.99 ?<p  className="col-6 text-warning">imc: {Math.floor(imcinfo.imc)}Obésité classe II</p> 
     : <p  className="col-6 text-danger">imc: {Math.floor(imcinfo.imc)} Obésité classe III</p>}
    
               
            </div>
           </div>
    )
}