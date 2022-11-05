
import React, { useEffect,useState } from "react";



export default function Counter() {
    const [counter,setcounter]= useState(0)

    useEffect(()=>{

console.log(counter);


    },[counter])
  return (
    <div>
      <h2>count :{counter}</h2>
      <button onClick = {()=>{setcounter(counter+1) }} ></button>
    </div>
  )
}
