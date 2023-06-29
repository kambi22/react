import { faCheck, faCheckCircle, faDiagramSuccessor, faE, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonGroup } from "@mui/material";
import { useState } from "react";
import { Form, ButtonToolbar, InputGroup, Toast } from "react-bootstrap";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import Footer from "./Footer";

function Check(props) {
    const [show, setshow] = useState(false);

    const Notification = () => {
        setshow(true)
    }
    return (
        <div>
            <div className="mt-5 pt-4 ">Check Pagh <h1></h1>


                <Toast onClose={() => setshow(false)} show={show} className='toast' delay={10000} autohide >
                    <Toast.Header  >
                        <FontAwesomeIcon icon={faCheckCircle} color='green'></FontAwesomeIcon>
                        <label className="text-success  me-auto ps-1" >Success</label>
                    </Toast.Header>
                    <Toast.Body className="text-start">
                        Successfully Login
                    </Toast.Body>
                </Toast>
            </div>
            <div className="mt-5 pt-5">
                <button onClick={Notification}>onclick</button>
            </div>
            <div className="position-relative">
            <LoginSocialGoogle
            client_id={"465121031456-84pmkgfgsj2gs3cb5og1lu2e64rabl3j.apps.googleusercontent.com"}
            scope='openid profile email'
            access_type="offline"
            onResolve={({provider,data})=>{
                console.log(provider,data)
            }}
            onReject={(err)=>{
                console.log(err);
            }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
            </div>
            <div >
            <LoginSocialFacebook
            client_id={"465121031456-84pmkgfgsj2gs3cb5og1lu2e64rabl3j.apps.googleusercontent.com"}
            scope='openid profile email'
            access_type="offline"
            onResolve={({provider,data})=>{
                console.log(provider,data)
            }}
            onReject={(err)=>{
                console.log(err);
            }}
            >
                <FacebookLoginButton/>
            </LoginSocialFacebook>
            </div>
            <div style={{width:'100px'}}>
                <p>
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                    Lerem100words
                    dkf;'lskf;lskd;fkds;fdfksdkfsdfsdf'
                </p>
            </div>

        </div>
    )
}
export default Check;