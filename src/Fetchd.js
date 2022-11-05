import React, { useEffect, useState } from 'react'

const Fetchd = () => {
    const [advice,setadvice] = useState("")
     
useEffect(()=>{
    let url = "https://api.adviceslip.com/advice"

const fetchapi=async()=>{


try {
    const response = await fetch(url)
const data = await response.json()
console.log(data.slip.sdvice)
setadvice(data.slip.advice)

} catch (error) {
    console.log("errors",error)
}

}
fetchapi();
},[])

  return (
    <div>
      {advice}
    </div>
  )
}

export default Fetchd