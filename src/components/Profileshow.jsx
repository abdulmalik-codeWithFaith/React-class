
import { Link } from "react-router-dom"
import Profile from "./Profile"
export default function(){
    return(
        <>
            <Link to="/event">Go to Event</Link>
            <Profile name="Kola" skill="Fullstack Developer"/>
            <Profile name="Bola" skill="Frontend Developer"/>
            <Profile name="Tola" skill="Backend Developer"/>
        </>
    )
}