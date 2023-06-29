import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function SingUpPage() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [Passward, setpass] = useState("")
    const navigate = useNavigate();




    function Singup() {
        localStorage.setItem("email", email)
        const item = { name, email, Passward }
        console.warn("items", item);

        axios.post("http://localhost:8000/signup", item)
            .then(resp => {
                if (resp.data === "Successful") {
                    navigate("/")
                    alert("Login Successful")
                    
                }else{
                    alert("Plaese Enter Vailed Login")
                }
            }).catch((error) => { console.warn("error"); if (error) { alert("Please connect to internet") } })


    }


    return (

        <div className="center">

            <div >

                <h1>SingUp  Page</h1>
                <label htmlFor="">Name</label><br />
                <input type="text" typeof="name" value={name} onChange={(e) => setname(e.target.value)} /> <br />
                <label htmlFor="">Email</label><br />
                <input type="text" typeof="email" value={email} onChange={(e) => setemail(e.target.value)} /><br />
                <label htmlFor="">Passward</label><br />
                <input type="text" typeof="Passward" value={Passward} onChange={(e) => setpass(e.target.value)} /><br /><br />
                <h6>If you  have an acount <Link to="/login">Login</Link></h6>
                <Button onClick={Singup}>SingUp</Button>
            </div>
        </div>
    )

}
export default SingUpPage;