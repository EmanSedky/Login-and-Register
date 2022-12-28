import React, { useState } from "react";
export const Register=(props)=>{
    const [name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[repass,setrePass]=useState('');
   
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
return(
    <div className="auth-form-container">
        <h2>Create account</h2>
    <form  className="register-form" onSubmit={handleSubmit}>
        
        <label htmlFor="name">Your name</label>
        <input value={name} onChange ={(e)=>setName(e.target.value)}type="name" placeholder=" First and last name" id= "name" name="name"/>
        
        
        <label htmlFor ="email">Mobile number or email</label>
        <input value={email} onChange ={(e)=>setEmail(e.target.value)}type="email" placeholder=" example@example.com" id= "email" name="email"/>
        
        <label htmlFor ="password">password</label>
         <input value={pass} onChange ={(e)=>setPass(e.target.value)}type="password" placeholder="At least 6 characters" id="password" name="password"/>
       
         <label htmlFor ="password">Re-enter password</label>
         <input value={repass} onChange ={(e)=>setrePass(e.target.value)}type="password" placeholder="******" id="password" name="password"/>
       
       <button type="submit">Continue</button>
       </form>
       <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? sign in.</button>
       </div>
)

}