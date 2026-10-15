import { Link } from "react-router-dom";
export default function Event(){
    function hi(){
        alert("hello");
    }
    return(
        <>
            <h1>EVENT HANDLING</h1>
            <button onClick={hi} style={{margin: "30px"}}>Greet</button>

            <button onClick={() => {
                alert("Today is wednesday")
            }}>Click</button>
            <Link to="/">Go to Profile</Link>
        </>
    )
}