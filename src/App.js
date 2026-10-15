import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profileshow"
import "./App.css"
import Event from "./components/Event";
import ApiClass from "./components/api";
function App(){
  const text = {
    color: "purple",
    textAlign: "center"
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/api" element={<ApiClass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;