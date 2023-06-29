import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout() {
    let navigate = useNavigate()

    
   
    const logout = () => {
       
        let email = localStorage.getItem("email")
        axios.delete(`http://localhost:8000/logout/${email}`)
            .then((resp) => {
                console.warn(resp.data);
                if (resp.data === "logout") {
                    alert('Successfully Logout')
                    navigate("/")
                } else {
                    alert("Somthing Wrong Try Again")
                }
            }).catch(console.error("error"))
        localStorage.clear("email")
    }
    
    logout()
    
}
export default Logout;