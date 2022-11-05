import React from 'react'

export default function Navigationbutton(props) {
  return (
    <>
   <div className="card" >
  <img src={props.image} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <button onClick = {props.onClick}>button </button>
 
  </div>
</div>

    </>
  )
}
