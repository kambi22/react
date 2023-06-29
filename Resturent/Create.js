import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, Row, Spinner, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

function Create(props) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [ratting, setratting] = useState("");
    const [address, setaddress] = useState("");
    const [notify, setnotify] = useState(false);
    const [message, setmessage] = useState("");
    const navigate = useNavigate();

    const notification = (mess)=>{
        setmessage(mess)
        setnotify(true)
       }

    const AddData = () => {
          console.log("this is Add data");
        if (!name || !email || !ratting || !address) return notification('Plese Enter Vailed Data');
        let result = { name, email, ratting, address }

        axios.post('http://localhost:2000/resturent', result)
            .then((resp) => {

                if (resp.data === "successful") {

                    navigate("/list")
                } else {
                    notification("Somthing Worng Tay Again")
                }

            }).catch((error) => console.log("error"))

    }
    useEffect(() => {
        document.addEventListener("keydown", detectKey, true)
    }, [])
    let detectKey = (e) => {
        console.log("presses Key", e.key)
        if (e.key === "Enter") {
            AddData();
            console.log("function called");
        }

    }
    return (
        <div>
            <div className="notification">
                <Toast bg="white" onClose={() => setnotify(false)} show={notify} delay={3000} autohide >
                    <Toast.Header  >
                        <FontAwesomeIcon icon={faCheckCircle} color='green'></FontAwesomeIcon>
                        <label className="text-success  me-auto ps-1" >Success</label>
                    </Toast.Header>
                    <Toast.Body className="text-start">
                        {message}
                    </Toast.Body>
                </Toast>
            </div>

            <div className="mt-5" ><h1>Add Data</h1>

                <Container style={{ height: '350px' }} >
                    <Card variant="light" bg="light" className=" col-md-6  h-100 shadow updaecard " style={{ margin: "20px auto", }}>
                        <Row className="mt-5 updaterow">
                            <input className="col-9" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)}></input><br /><br />
                            <input className="col-9" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)}></input><br /><br />
                            <input className="col-9" placeholder="Enter Ratting" value={ratting} onChange={(e) => setratting(e.target.value)}></input><br /><br />
                            <input className=" col-9" placeholder="Enter Address" value={address} onChange={(e) => setaddress(e.target.value)}></input><br /><br />
                            <Button onClick={AddData} className="col-sm-9 mt-3" >Add Data</Button>
                        </Row>
                    </Card>
                </Container>
                <Spinner variant="info"></Spinner><br />
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export default Create;