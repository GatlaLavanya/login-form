import React, { useState } from "react";
import "./LoginSignup.css"

const LoginSignup = () => {
    const[action,setAction]=useState("Login");
  return (
    <div className="container">
        <div className="header">
        <div className="text">{action}</div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <input name="Username" placeholder="enter username" type="text"/>
            </div>}
            
            <div className="input">
                <input name="Username" placeholder="enter email" type="Email"/>
            </div>
            <div className="input">
                <input  placeholder="enter password" type="Password"/>
            </div>
        </div>
        {action==="sign up"?<div></div>:<div className="forget-password">forgot password?<span>click here</span></div>}
        
        <div className="submit-container">
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>setAction("sign up")}>Signup</div>
            <div className={action==="signup"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
    </div>
  )
}
 export default LoginSignup