import React from 'react'

const loginsignup = () => {
  return (
    <div className='loginsignup-container'>
      <h1>Sign Up</h1>
      <div className="loginsignup-container">
        <input type='text' placeholder='Your Name'/>
        <input type='email' placeholder='Email Address'/>
        <input type='password' placeholder='Password'/>

      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id=''/>
        <p>By continue, i agree to the terms of use & privacy policy</p>
      </div>
    </div>
  )
}
export default loginsignup;
