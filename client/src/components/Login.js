import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from "react"
import logo from "../assets/logo.jpg";
import '../App.css';

function Login (props) {
  const navigate = useNavigate();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [isdoctor, setIsdoctor] = useState(false);
  window.isadoc = isdoctor;
  
  const onClick = (e) => {
    e.preventDefault();

    if (email.length >= 0) {
      if (password.length >= 0) {
        if (isdoctor) {
          axios.get('http://localhost:4000/doc/prm', {params: {pwd:password, email:email}})
          .then((res) => {
            if (email === res.data.email) {
              window.iname = res.data.name;
              navigate('/aList');
            }})
          .catch((err) => {
            // console.log('Error D2 from Login' + err);
            alert('Password and/or email mismatch, please try again.')});
        } else {
          axios.get('http://localhost:4000/ptnt/prm', {params: {pwd:password, email:email}})
          .then((res) => {
            if (email === res.data.email) {
              window.iname = res.data.name;
              navigate('/aList');            
            }})
          .catch((err) => {
            // console.log('Error P2 from Login' + err);
            alert('Password and/or email mismatch, please try again.')}); 
        }
      } else {
        alert('Please Enter Password, atleast 8 char long.');
      }
    } else {
      alert('Please Enter Email, atleast 8 char long.');
    }
  };


  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src={require('../assets/tm.png')} 
              alt='tele medicine'
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="logo">
                <img src={logo} alt='tele medicine'/>
              </div>
                <h2><center>Virtual Health Care</center></h2>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Please Sign In</p>
              </div>

              {/* Email input */}
              <div>    {/*className="form-outline mb-4">*/}

                <label htmlFor="email"><b>Email</b></label>
                <br/>
                <input 
                  type="text" 
                  className="login-input"
                  placeholder="Enter Email" 
                  name="email" required
                  defaultValue={email}
                  onInput={e => setEmail(e.target.value)}
                  />
              </div>              

              {/* Password input */}
              <div>
                <label htmlFor="password"><b>Password</b></label>
                <br/>
                <input 
                  type="password"  
                  className="login-input"
                  placeholder="Enter Password" 
                  name="password" required 
                  defaultValue={password}
                  onInput={e => setPassword(e.target.value)} 
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                onChange={() => {setIsdoctor(!isdoctor);
                                window.isadoc = isdoctor}} 
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    I am a doctor.
                  </label>
                </div>
                <Link to='/dProfileNew' className="text-body">
                  Doctor's SignUp
                </Link>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} 
                  onClick={onClick}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <Link to='/pProfileNew' className="link-danger">Patient's Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
};

export default Login;

