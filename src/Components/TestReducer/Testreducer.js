import React, { useState ,useReducer} from "react";
const countReducer=(state,action)=>{
switch(action.type){
    case"ADD":{
        return {count:state.count+1}
    }
    case"MINUS":{
        return{ count:state.count-1}
    }

default :{
   return state
}}}

export default function Testreducer(){
    // const [count,setCount]=useState(0)
    const [counter,setCount]=useReducer(countReducer,{count:0})
    // const addFunc=()=> setCount(perState=>perState+1  )
    // const minFunc=()=>setCount(perState=>perState-1 )
    return(
        <div>
            <h1>{counter.count}</h1>
            <button onClick={setCount({type:"ADD"})}>ADD</button>
            <button onClick={setCount({type:"MINUS"})}>MINUS</button>
        </div>
    )
}