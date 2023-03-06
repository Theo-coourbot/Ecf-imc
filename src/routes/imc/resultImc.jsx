import { useSelector } from "react-redux"

export const ResultImc = () => {
    const imc = useSelector (state => state.imc.imcStock)
   
   return (
        <>
     <div>{imc}</div>


    
        </>
    )
} 