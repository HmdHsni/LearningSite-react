import React  from "react";
import { useEffect,useContext } from "react";
import Header from "../Header/Header";
import Topbar from "../topbar/Topbar";

    export default function TestComponent(){
        useEffect(()=>{
            console.log("i am useEffect");
                },[])
        return(
            <>
    <Topbar/>
            </>
        )
    }
  
