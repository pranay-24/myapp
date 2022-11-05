import React from 'react'
import {useEffect} from 'react'

useEffect(()=>{

    let url = "https://api.adviceslip.com/advice" ;
        const fetchdata =async()=>{
 
        const data    =  await fetch(url)
        const response = await data.json()
        console.log(response)
    }

    fetchdata();
},[])

export default function app() {
  return (
    <div>app</div>
  )
}
