import { NavLink } from "react-router-dom"


export const Error = () => {
    return (
        <div className="conainer">
        <h1>Page introuvable</h1>
        <NavLink to={`/`}>Retour a l'acceuil</NavLink>
        </div>
    )
}