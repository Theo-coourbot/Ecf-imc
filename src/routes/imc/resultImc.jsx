import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export const ResultImc = () => {
    const imc = useSelector (state => state.imc.imcStock)
   
   return (
        <>
     <div className=" bg-dark text-white text-center py-2 m-3"><p className="fs-3">votre imc est de : {imc} </p> 
     
     {imc < 18.5 ? <table className="container table table-info  ">
  <thead>
    <tr>
      <th>categorie</th>
     
      <th>niveau de risque</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Poids insuffisant	</td>
      <td>risque accru</td>
    </tr>
  </tbody>
</table>
     : imc >= 18.5 && imc <= 24.99 ?   <table className="container table table-success  ">
     <thead>
       <tr>
         <th>categorie</th>
        
         <th>niveau de risque</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         
         <td>Poids normal		</td>
         <td>moindre risque</td>
       </tr>
     </tbody>
   </table> 
     :  imc >= 25 && imc<= 29.99 ? <table className="container table table-info  ">
     <thead>
       <tr>
         <th>categorie</th>
        
         <th>niveau de risque</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         
         <td>Embonpoint	</td>
         <td>risque accru</td>
       </tr>
     </tbody>
   </table> 
     :imc >= 30 && imc<= 34.99 ? <table className="container table table-primary  ">
     <thead>
       <tr>
         <th>categorie</th>
        
         <th>niveau de risque</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         
         <td>Obésité classe I	</td>
         <td>risque élevé</td>
       </tr>
     </tbody>
   </table>  
     :imc >= 35 && imc<= 39.99 ?<table className="container table table-warning  ">
     <thead>
       <tr>
         <th>categorie</th>
        
         <th>niveau de risque</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         
         <td>Obésité classe II	</td>
         <td>risque très élevé</td>
       </tr>
     </tbody>
   </table>   
     : <table className="container table table-danger  ">
     <thead>
       <tr>
         <th>categorie</th>
        
         <th>niveau de risque</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         
         <td>Obésité classe III	</td>
         <td>risque extrêmement  élevé</td>
       </tr>
     </tbody>
   </table>   }
     
     
     
     
     
     
     
     
     
    <NavLink to={`/listeImc`} className="btn btn-outline-info ">voir mes imc</NavLink>
    <NavLink  to={`/`} className="btn btn-outline-info ms-3">revenir a l'acceuil</NavLink>
     </div>




    
        </>
    )
} 