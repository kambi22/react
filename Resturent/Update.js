import axios from "axios";
import { useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
function Update() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [ratting, setratting] = useState("");
    const [address, setaddress] = useState("");
    const [notify, setnotify] = useState(false);
    const [message, setmessage] = useState("");
    
    const notification = (mess)=>{
        setmessage(mess)
        setnotify(true)
       }

    const navigate = useNavigate();
    let { id } = useParams();




    const UpdateData = () => {
        if(!name || !email || !ratting || !address)return alert('Plese Enter Vailed Data');
        let result = { name, email, ratting, address }
     
        axios.put(`http://localhost:2000/resturent/${id}`, result)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data === "Success") {
                    navigate("/list")
                    notification("Data Updated Successfully")
                } else {
                    notification("Somthing Wrong Please Try Again")
                }
            }).catch((error) => console.log("error"))

    }
    useEffect(() => {
        document.addEventListener("keydown", Enterkey, true)
    }, [])
    const Enterkey = (e) => {
        if (e.key === "Enter") {
            UpdateData();
        }
    }

    return (
        <div><div className="notification">
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
        <div className="mt-5 " ><h1>Update Data</h1>
            <Container style={{ height: '350px' }} >
                <Card variant="light" bg="light" className="col-md-6  h-100 shadow updaecard " style={{ margin: "20px auto", }}>
                    <Row className="mt-5 updaterow">
                        <input className="col-9" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)}></input><br /><br />
                        <input className="col-9" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)}></input><br /><br />
                        <input className="col-9" placeholder="Enter Ratting" value={ratting} onChange={(e) => setratting(e.target.value)}></input><br /><br />
                        <input className=" col-9" placeholder="Enter Address" value={address} onChange={(e) => setaddress(e.target.value)}></input><br /><br />
                        <Button onClick={UpdateData} className="col-sm-9 mt-3" >EditData</Button>
                    </Row>
                </Card>
            </Container>
        </div>
        <footer>
            <Footer/>
        </footer>
        </div>
    )
}
export default Update;