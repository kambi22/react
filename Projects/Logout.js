
import { Button } from "react-bootstrap";
import React from "react";
import axios from "axios";

function Logout(props){
    const logoutacount=()=>{
        const email =localStorage.getItem("email")
        axios.delete(`http://localhost:8000/login/${email}`)
        .then((resp=>{console.warn(resp.data);alert('Successfully Logout')})).catch(console.error(("error")))
    }
    return(
        <div>
            <h1>Logout Page</h1>
          <Button onClick={logoutacount}>Logout</Button>
        </div>
    )
}
export default Logout;