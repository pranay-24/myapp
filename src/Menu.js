import React from 'react'
import { Menuitems } from './Menuitems'
import Navigationbutton from './Navigationbutton'

import { useState } from 'react'

export default function Menu() {
   const [isopen, setisopen] = useState(false)
  return (
    <div>
        <Navigationbutton onClick={()=>{setisopen(!isopen)}} title= "Menu" image = "https://designcode.io/images/icons/pricing.svg"/>

{isopen && (
<div>
      {
      
      Menuitems.map((menu,index)=>{
        
         <Navigationbutton 
        key={index}
        title={menu.title}
        image={ menu.image} />
    
      })}
</div>
    
)
    }
    </div>
  )
}
