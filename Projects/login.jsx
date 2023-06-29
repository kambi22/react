
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
function LoginPage() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [passward, setpass] = useState("")

    const navigate = useNavigate();




    function login() {
        let result = {email, passward }
        console.log("login result", result)
        axios.post("http://localhost:8000/login", result)
            .then((resp) => { console.warn("resposse data",resp.data);
                if (resp.data === "Success") {
                    navigate("/")
                    prompt("Login Successful")
                } else {
                    alert("Failes to login")
                }
            }).catch((error) => console.log("error"))




    }


    return (
        <div className="center">

            <div >
                <h1>Login  Page</h1>
                <label htmlFor="">Name</label><br />
                <input type="text" typeof="name" value={name} onChange={(e) => setname(e.target.value)} /> <br />
                <label htmlFor="">Email</label><br />
                <input type="text" typeof="email" value={email} onChange={(e) => setemail(e.target.value)} /><br />
                <label htmlFor="">Passward</label><br />
                <input type="text" typeof="passward" value={passward} onChange={(e) => setpass(e.target.value)} /><br /><br />
                <h6>If you dont have an acount <Link to="/singup">SingUp</Link></h6>
                <Button onClick={login}>Login</Button>
            </div>
        </div>

    )

}
export default LoginPage;