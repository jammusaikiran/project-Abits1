import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { set } from "mongoose";
//import {Link} from "react-router-dom";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Cookies from "js-cookie"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll  } from "react-scroll";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { zIndex: 1000 },
};

const customregisterStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height : "100%",
    width : "100%"
  },
  overlay: { zIndex: 1000,
    background : "rgba(0,0,0,0)"
  },
};

Modal.setAppElement("#root");

const Nav = ({ name }) => {
    const history=useNavigate();
    const navigate=useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    // const [islog, setislog]=useState(false)
    // const notify = () => toast.success("Login Successful!");

    async function submit(e) {
      e.preventDefault();
    
      try {
        const response = await axios.post("http://localhost:8000/", {
          email,
          password,
        });
        
        const data = response.data; // Use response.data instead of res.json
        console.log(response.data.data.token)
        const {token}=data;
        console.log(token)
        if (response.status >= 200 && response.status < 300) {
          // Check if the status code indicates success
          
          Cookies.set("jwtoken", response.data.data.token, {
            expires: 1, // Set the expiration time as needed
            path: "/",
            sameSite: "None",
            secure: true,
          });
          const cookies=Cookies.get();
          console.log(cookies)
          history("/clone", { state: { id: email } });
          alert("Login Successful");
          setIsLoggedIn(true);
          setLoggedInUsername(email);
          setIsOpen(false);
        } else if (data === "notexist") {
          alert("User has not signed up");
        }
      } catch (error) {
        alert("Wrong details");
        console.error(error);
      }
    }

const handleLogout =() =>{
  toast.success("Logout Successfully!")
  setIsLoggedIn(false);
  navigate('/home');
  // toast.success("Logout Successfully!")
}
const handleAboutClick = () => {
  scroll.scrollToBottom({ duration: 800, smooth: 'easeInOutQuart' }); // Scroll to the bottom smoothly
};
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen, setIsOpen] =useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const [registerIsOpen, setregisterIsOpen] = useState(false);
  // const [registerIsOpen, setregisterIsOpen] = React.useState(false);

  function openRegister() {
    setregisterIsOpen(true);
    setIsOpen(false);
  }

  function afterOpenRegister() {
//  setIsOpen(false)
  }

  function closeRegister() {
    setregisterIsOpen(false);
  }

  const register = () => {};

  return (
    <div className="nav-bar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="nav-left">
        <div className="logo-left" />
        <div className="login-button-div">
          <div className="top" />
          <button className="logo">SKILLX{name}</button>
          <div className="bottom" />
        </div>
        <div className="logo-right" />
      </div>

      <div className="nav-right" >
        {/* <div className="left" /> */}
        <nav className="navigation" >
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleAboutClick}>About</a>
          {/* <a href="#">Services</a> */}
          <a href="mailto:22bd1a057n@gmail.com?subject=&body=">Contact</a>
          <div style={{flex: 1}}></div>
          {isLoggedIn ? (
  <div className="user-greeting" style={{ marginRight: '10px' }}>
    <span style={{ marginRight: '10px', color: 'White',fontWeight:'bolder'}}> 
    {/* <div><ion-icon name="person-circle-outline"></ion-icon></div> */}
    
    {loggedInUsername.split('@')[0]} </span>
    <button
      style={{
        backgroundColor: 'skyblue',
        color: '#333',
        border: '1px solid #ccc',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius:'6px',
        marginRight:'10px',
        height:'40px',
        width:'90px',
        fontWeight:'bold'

      }}
      onClick={handleLogout}
      
    >
      Logout
    </button>
  </div>
) : (
  <button
    id="loginButton"
    className="btnLogin-popup"
    style={{
      backgroundColor: '#fff',
      color: '#333',
      border: '1px solid #ccc',
      padding: '5px 10px',
      cursor: 'pointer',
    }}
    onClick={openModal}
  >
    Login
  </button>
)}

          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="cancel-button" onClick={closeModal}>
              <button type="button" className="intobutton">
                X
              </button>
            </div>

            <h2 className="heading">Login</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                {/* <label>Enter your Email</label> */}
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                {/* <label>Password</label> */}
              </div>
              <div className="remember-forget">
                {/* <label>
                  <input type="checkbox" /> Remember me
                </label> */}
                <a >
                  Forgot password
                </a>
              </div>
              <div className="login-register-div">
                <button type="submit" onClick={submit} className="loginButton">
                <ToastContainer />
                  Login
                </button>
              </div>
              <div>
                <Link to="signup" >
                <button
                  type="button"
                  className="register-Button"
                  onClick={openRegister}
                >
                  Register
                </button>
                </Link>
                
              </div>
              
            </form>
          </Modal>

        </nav>
        {/* <div className="right" /> */}
      </div>
    </div>
  );
};

export default Nav;