import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PtntNavbar from "./PtntNavbar";
import axios from 'axios';
import '../App.css';

function UpdatePtntInfo(props) {
  const [ptnt, setPtnt] = useState({
    name: '',
    age: '',
    gen: '',
    address: '',
    mobile: '',
    email: '',
    pwd: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://med-web-node.onrender.com/ptnt/prm', {params: {id:id}})  //http://localhost:4000
      .then((res) => {
        setPtnt({
          name: res.data.name,
          age: res.data.age,
          gen: res.data.gen,
          address: res.data.address,
          mobile: res.data.mobile,
          email: res.data.email,
          pwd: res.data.pwd
        });
      })
      .catch((err) => {
        // console.log('Error 1 from UpdatePtntInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setPtnt({ ...ptnt, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: ptnt.name,
      age: ptnt.age,
      gen: ptnt.gen,
      address: ptnt.address,
      mobile: ptnt.mobile,
      email: ptnt.email,
      pwd: ptnt.pwd
    };

    axios
      .put(`https://med-web-node.onrender.com/ptnt/${id}`, data)  //http://localhost:4000
      .then((res) => {
        navigate(`/pProfile/${data.name}`);
      })
      .catch((err) => {
        // console.log('Error 2 from UpdatePtntInfo!');
      });
  };

  return (
    <div>
        <div><PtntNavbar /></div>
        <center><h1>Update Patient's Profile</h1></center>
        <center><p className='lead text-center'>Update Patient's Info</p></center>


        <div class="container">
          <form noValidate onSubmit={onSubmit}>

            <label forHtml="name">Name</label>
            <input type="text" id="name" placeholder="Patient Name"
                name='name' value={ptnt.name}
                onChange={onChange}
            />
            
            <label forHtml="age">Age</label>
            <input type="text" id="age" placeholder="Age"
                name='age' value={ptnt.age}
                onChange={onChange}
            />

            <label forHtml="gen">Gender</label>
            <select id="gen" name="gen"
                value={ptnt.gen}
                onChange={onChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            
            <label forHtml="address">Address</label>
            <input type="text" id="address" placeholder="Address"
                name='address' value={ptnt.address}
                onChange={onChange}
            />
            
            <label forHtml="mobile">Mobile</label>
            <input type="text" id="mobile" placeholder="Mobile"
                name='mobile' value={ptnt.mobile}
                onChange={onChange}
            />
            
            <label forHtml="email">Email</label>
            <input type="text" id="email" placeholder="Email"
                name='email' value={ptnt.email}
                onChange={onChange}
            />
            
            <label forHtml="pwd">Password</label>
            <input type="text" id="pwd" placeholder="Password"
                name='pwd' value={ptnt.pwd}
                onChange={onChange}
            />

            <input type="submit" value="Update Patient" />
          </form>
        </div>

    </div>
  );
}

export default UpdatePtntInfo;


