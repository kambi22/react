import { useNavigate, useParams } from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function Delete() {
    let navigate = useNavigate();
    let [result, setresult] = useState([])
    let { id } = useParams();

    useEffect(() => {
        Getapi();

       
    }, [])
   

  
        axios.delete(`http://localhost:2000/resturent/${id}`)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data === "Success") {
                    alert("Deleted Successfully")
                    navigate("/list")
                } else {
                    alert("Somthing Wrong Try Again")
                }
            }).catch((error) => console.log("error"))
    


    let Getapi = () => {
        axios.get("http://localhost:2000/resturent")
            .then((resp) => setresult(resp.data), console.log("from delete", result)).catch((error) => console.log("error"))
    }


    return (
        <div className="tabledata"><h1>Resturents Data</h1>

            <Table striped bordered hover variant="light" responsive>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Ratting</th>
                        <th>Address</th>
                        <th colSpan={2}>Operation</th>
                    </tr>
                </thead>
                {result.map((item, i) =>
                    <tbody>

                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.ratting}</td>
                            <td>{item.address}</td>
                            <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></td>
                            <td><Link to={"/delete/" + item.id}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Link></td>
                        </tr>

                    </tbody>
                )
                }
            </Table>

        </div>
    )
}
export default Delete;