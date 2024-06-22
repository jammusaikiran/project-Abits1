import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate,Link } from "react-router-dom";


const Signup = () => {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')

    async function submit(e){
        e.preventDefault();
        // alert(email);
        try{
            await axios.post("http://localhost:8000/signup",{
                "email":email,
                "password":password,
                "username":username
            })
            .then(res=>{
                if(res.data.exist=="exist"){
                    alert("User already exists")
                }
                //else if(res.data=="notexist")
                else{
                  history("/home",{state:{id:email}})
                  alert("Registeration successful");
                  //history.push("/");
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }



  return (
    <div className="signup">
      
      <div id="registerPopup" className="popup">
        
        <h2 className="heading">Register</h2>
        <form>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" />
            {/* <label>Username</label> */}
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
            {/* <label>Email</label> */}
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
           <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
            {/* <label>Password</label> */}
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> agree to the terms & conditions
            </label>
            {/* Uncomment if needed */}
            {/* <a href="http://127.0.0.1:5500/AI-project/forgot-pass.html">Forget password</a> */}
          </div>
          <button type="submit" onClick={submit} className="registerButton">
	  
            Register
          </button>
          <div className="login-register">
            {/* Uncomment if needed */}
            {/* <p>Already have an account?<a href="#" className="login-link">Login</a></p> */}
          </div>
        </form>
        <Link to="/home"></Link>
      </div>
    </div>

  );
};

export default Signup;