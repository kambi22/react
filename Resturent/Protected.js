import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    let navigate = useNavigate();
    let {Component} = props;
    useEffect(()=>{
        let login = localStorage.getItem('email')
        if(!login){
            navigate("/login")
        }
    })
    return(
        <div>
           
         <Component />
        </div>
    )
}
export default Protected;