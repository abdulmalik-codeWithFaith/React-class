
import Pic from "../trigger.webp"
import "./profile.css";
export default function Profile({name, skill}){
  return(
    <>
      <nav>
        <img src={Pic} alt="student" width={100} />
        <h1>{name}</h1>
        <p>{(skill) ? skill : "New Student"}</p>
      </nav>
    </>
  )
}