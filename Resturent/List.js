import { faEdit,  faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Footer from "./Footer";


function List() {
    
    const [input] = useSearchParams();
    const [result, setresult] = useState([])
    let value = input.get("name")
    let navigate= useNavigate();
    console.log("value from list", value);

    let Getapi = () => {
        axios.get("http://localhost:2000/resturent")
            .then((resp) => setresult(resp.data), console.log("chek", result)).catch((error) => console.log("error"))
    }

    useEffect(() => {

            Getapi();

    }, [])



    return (
        <div className="mt-3" ><h1>Resturents Data</h1>
        <Container>
            <Table striped bordered hover responsive="sm" >

                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th >Ratting</th>
                        <th>Address</th>
                        <th  colSpan={2}>Operation</th>
                    </tr>
                </thead>
                {result.length > 0 ? result.map((item, i) =>
                <tbody>
                   
                        <tr  key={i}>
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
                 : <th colSpan={6}>No Data Found Here</th>
             }
            </Table>
            </Container>
            <Footer />
        </div>
    )
}
export default List;