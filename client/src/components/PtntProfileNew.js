import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const PtntProfileNew = (props) => {
  const navigate = useNavigate();
  const [ptnt, setPtnt] = useState({
    name: '',
    age: '',
    gen: 'Female',
    address: '',
    mobile: '',
    email: '',
    pwd: ''
  });

  const onChange = (e) => {
    setPtnt({ ...ptnt, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://med-web-node.onrender.com/ptnt', ptnt)  //http://localhost:4000
      .then((res) => {
        setPtnt({
          name: '',
          age: '',
          gen: 'Female',
          address: '',
          mobile: '',
          email: '',
          pwd: ''
        });

        navigate('/');
      })
      .catch((err) => {
        // console.log('Error in Patient Registration!');
      });
  };

  return (
    <div>
        <center><h1>Patient Registration</h1></center>
        <center><p className='lead text-center'>Create a new profile for patient.</p></center>


        <div className="container">
          <form noValidate onSubmit={onSubmit}>

            <label forhtml="name">Name</label>
            <input type="text" id="name" placeholder="Name"
                name='name' value={ptnt.name}
                onChange={onChange}
            />
            
            <label forhtml="age">Age</label>
            <input type="text" id="age" placeholder="Age"
                name='age' value={ptnt.age}
                onChange={onChange}
            />

            <label forhtml="gen">Gender</label>
            <select id="gen" name="gen"
                value={ptnt.gen}
                onChange={onChange}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            
            <label forhtml="address">Address</label>
            <input type="text" id="address" placeholder="Address"
                name='address' value={ptnt.address}
                onChange={onChange}
            />
            
            <label forhtml="mobile">Mobile</label>
            <input type="text" id="mobile" placeholder="Mobile"
                name='mobile' value={ptnt.mobile}
                onChange={onChange}
            />
            
            <label forhtml="email">Email</label>
            <input type="text" id="email" placeholder="Email"
                name='email' value={ptnt.email}
                onChange={onChange}
            />
            
            <label forhtml="pwd">Password</label>
            <input type="text" id="pwd" placeholder="Password"
                name='pwd' value={ptnt.pwd}
                onChange={onChange}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>

    </div>

  );
};

export default PtntProfileNew;


