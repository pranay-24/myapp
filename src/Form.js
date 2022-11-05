import React from 'react'
import Inputform from './Inputform'

const Form = ()=>{

  const email  = Inputform ("")
  const password  = Inputform ("")

    const submitform = (event)=>{
event.preventDefault();
console.log("email",email.value)
console.log("password",password.value)
    }


  return (
    <div>

 <form onSubmit={submitform}>


        <div className='row'>
            <div className='col-8'>
      <input placeholder ="Email" value ={ email.value} onChange = {email.onchange} /> 
            </div>
            </div>

      <div className='row'>
        <div className='col-8'>
      <input placeholder ="password" type = 'password' value ={ password.value} onChange = {password.onchange} />
      </div>
      </div>
     <div className='row'>
        <div className='col-3'>
     <button type='submit'>sign in</button>
      
    </div>
    </div>


    </form>
    </div>
  )
}

export default Form