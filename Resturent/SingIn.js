import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUser,faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import axios from "axios";
function SingIn() {
    let navigate = useNavigate();
    const [name, setname] = useState("");
    const [value, setvalue] = useState("");
    const [show, sethide] = useState(false);
    const [notify, setnotify] = useState(false);
    const [email, setemail] = useState("");
    const [passward, setpassward] = useState("");
    const [message, setmessage] = useState("");
    
    const notification = (mess)=>{
        setmessage(mess)
        setnotify(true)
       }
    
    
    const Signup = () => {
        let input = { name, email, passward }
       
        if (!name || !email || !passward) {
            notification("Enter valid Data")
                   
        }else if(passward.length < 6){
            setvalue("passward should least 6 chracter")
        }else{
            setvalue('')
        
            localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        axios.post("http://localhost:8000/signup", input)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data === "Success") {
                    console.log("login hogeya");
                    notification("Login Successful")
                    navigate("/")
                } else if(resp.data==="fail"){
                    notification("Login failed")
                }
            }).catch((error) => console.log("error"))
        
    }
    }
    return (
         <div>

         <div className="notification">
                <Toast bg="white" onClose={() => setnotify(false)} show={notify}  delay={3000} autohide >
                    <Toast.Header  >
                        <FontAwesomeIcon icon={faCheckCircle} color='green'></FontAwesomeIcon>
                        <label className="text-success  me-auto ps-1" >Success</label>
                    </Toast.Header>
                    <Toast.Body className="text-start">
                        {message}
                    </Toast.Body>
                </Toast>
            </div>
        <div className="profile mt-5 pt-5">
         <Container >
         <Card variant="light" className="col-md-5 h-100"  bg="light" style={{ margin: "20px auto",  boxShadow: "5px 3px 6px rgb(148, 146, 146)" }}>
                <Card.Body>
                    <div className="ms-4 mb-4 mt-2" ><h2>Sing In</h2></div>
                    <div className=" row ">
                        <label className="label">Name</label><br />
                        <input className="col-11 ms-3 " type="name" value={name} onChange={(e) => setname(e.target.value)}></input><br />
                        <label className="label">Email</label><br />
                        <input className="col-11 ms-3" type="email" value={email} onChange={(e) => setemail(e.target.value)}></input><br />
                        <label className="label">Passward</label><br />
                        <div className="passward col-11 ms-3 " >
                                <input className="col-11 " type={show ? "text":"password"}  value={passward} onChange={(e) => setpassward(e.target.value)} />
                                <i onClick={()=>sethide(!show)}><FontAwesomeIcon  className={!show? 'd-inlne':'d-none'} icon={faEyeSlash} />
                                <FontAwesomeIcon  className={show? 'd-inlne':'d-none'} icon={faEye} />
                                </i>
                                <span style={{color:"red"}}  className="text-mutedl">{value}</span>
                            </div><br></br>
                        
                    
                
                    
                        <Button variant="success" className="col-11 mt-5 ms-3" onClick={Signup}>Login</Button>

                    </div><br></br>
                    <h6 className="text-center text-muted">if you have an account <Link to="/login">Login</Link></h6>
                </Card.Body></Card>
         </Container>
        </div>
        </div>
    )
}
export default SingIn;