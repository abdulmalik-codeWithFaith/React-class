import Logo from "./trigger.webp";
import Profile from "./components/Profile"
import "./App.css"
function App(){
  const text = {
    color: "purple",
    textAlign: "center"
  }
  return(
    <>
      <Profile name="TOLA" skill="Fullstack Developer"/>
      <Profile name="KOLA" skill="Frontend Developer"/>
      <Profile name="BOLA" />
    </>
  )
}

export default App;