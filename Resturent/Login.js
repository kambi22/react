import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { Button, Card, Container, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { Toast } from "react-bootstrap";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Profile from "./Profile";
import Check from "./Check";
function Login() {
    const [email, setemail] = useState("");
    const [value, setvalue] = useState("");
    const [show, sethide] = useState(false);
    const [notify, setnotify] = useState(false);
    const [message, setmessage] = useState("");
    const [profile, setprofile] = useState("");


    const notification = (mess) => {
        setmessage(mess)
        setnotify(true)
    }
    const [passward, setpassward] = useState("");
    let navigate = useNavigate();



    localStorage.setItem('name',profile.name)
    localStorage.setItem('email',profile.email)
    console.log(profile.name,profile.email);
    if(localStorage.getItem('email')){
        navigate('/')
    }
    const login = () => {
        let data = { email, passward }
       
      
        if (!email || !passward) return notification('Plese Enter Vailed Data');
        if (passward.length < 6) {
            setvalue("passward should least 6 chracter")
        }
        else {
            setvalue('')
        }

        axios.post("http://localhost:8000/login", data)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data === 'mising') return alert('Please Enter Valid data')
                else if (resp.data === "Success") {
                    navigate("/")
                    notification("Login Successful")
                } else {
                    notification("Login Failed")
                }
            }).catch((error) => console.log("errorggg"))
    }

    return (
        <div>
           
            <div className="notification">
                <Toast bg="white" onClose={() => setnotify(false)} show={notify} className='' delay={3000} autohide >
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
                    <Card variant="light" bg="light" className="col-md-5  h-100 shadow " style={{ margin: "20px auto", }}>
                        <Card.Body>
                            <div className="ms-5 mb-3 mt-2" ><h2>Log I</h2></div>
                            <div className=" row ">

                                <label className="label">Email</label><br />
                                <input className="col-11 ms-3" type='email' value={email} onChange={(e) => setemail(e.target.value)}></input><br />
                                <label className="label">Passward</label><br />


                                <div className="passward ms-3 col-11 " >

                                    <input className="col-11" type={show ? "text" : "password"} value={passward} onChange={(e) => setpassward(e.target.value)} />
                                    <i onClick={() => sethide(!show)}><FontAwesomeIcon className={!show ? 'd-inlne' : 'd-none'} icon={faEyeSlash} />
                                        <FontAwesomeIcon className={show ? 'd-inlne' : 'd-none'} icon={faEye} />
                                    </i>
                                    <span style={{ color: "red" }} className="text-mutedl">{value}</span>
                                </div>

                                <br /><br />
                            </div>
                            <div className="row " >
                                <Button variant="success " className="col-11 ms-3 mb-2" onClick={login}>Login</Button><br />
                                <h4 className="text-center text-muted">or</h4><br />
                                <LoginSocialGoogle 
                                    client_id={"465121031456-84pmkgfgsj2gs3cb5og1lu2e64rabl3j.apps.googleusercontent.com"}
                                    scope='openid profile email'
                                    access_type="offline"
                                    onResolve={({ provider, data }) => {
                                        console.log(provider, data)
                                        setprofile(data)
                                        console.log('profile',data)
                                    }}
                                    onReject={(err) => {
                                        console.log(err);
                                    }}
                                >
                                    <GoogleLoginButton />
                                </LoginSocialGoogle>
                                <LoginSocialFacebook
                                   
                                    appId="1202543621145094"
                                    scope="email profile openid"
                                    onResolve={(response)=>{
                                        console.log(response)
                                    }}
                                    
                                    onReject={(err)=>{
                                    console.log("error",err)
                                }}
                           
                                >
                                    <FacebookLoginButton />
                                </LoginSocialFacebook>

                            </div><br />
                            <h6 className="text-center text-muted">if you dont have an account <Link to="/singin">SignUp</Link></h6>

                        </Card.Body></Card>
                </Container>
            </div>
        </div>
    )
}
export default Login;