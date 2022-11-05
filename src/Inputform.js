import React, { useState } from 'react'

const Inputform =(initialvalue)=>{
const [value,setvalue] = useState(initialvalue)

  const handlechange=(event)=>{
setvalue(event.target.value)
  }

  return {  value,
    onchange: handlechange}
 
  
}
export default Inputform