import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DocProfileNew = (props) => {
  
  const navigate = useNavigate();
  const [doc, setDoc] = useState({
    name: '',
    age: '',
    gen: 'Female',
    speciality: '',
    active: '',
    email: '',
    pwd: ''
  });

  const onChange = (e) => {
    setDoc({ ...doc, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/doc', doc)
      .then((res) => {
        setDoc({
          name: '',
          age: '',
          gen: 'Female',
          speciality: '',
          active: '',
          email: '',
          pwd: ''
        });

        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Doctor Registration!');
      });
  };

  return (    
    <div>
        <center><h1>Doctor Registration</h1></center>
        <center><p className='lead text-center'>Create a new profile for doctor.</p></center>


        <div className="container">
          <form noValidate onSubmit={onSubmit}>

            <label forhtml="name">Name</label>
            <input type="text" id="name" placeholder="Name"
                name='name' value={doc.name}
                onChange={onChange}
            />
            
            <label forhtml="age">Age</label>
            <input type="text" id="age" placeholder="Age"
                name='age' value={doc.age}
                onChange={onChange}
            />

            <label forhtml="gen">Gender</label>
            <select id="gen" name="gen"
                value={doc.gen}
                onChange={onChange}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            
            <label forhtml="speciality">Speciality</label>
            <input type="text" id="speciality" placeholder="Speciality"
                name='speciality' value={doc.speciality}
                onChange={onChange}
            />
            
            <label forhtml="active">Active</label>
            <input type="text" id="active" placeholder="Active"
                name='active' value={doc.active}
                onChange={onChange}
            />
            
            <label forhtml="email">Email</label>
            <input type="text" id="email" placeholder="Email"
                name='email' value={doc.email}
                onChange={onChange}
            />
            
            <label forhtml="pwd">Password</label>
            <input type="text" id="pwd" placeholder="Password"
                name='pwd' value={doc.pwd}
                onChange={onChange}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>

    </div>
  );
};

export default DocProfileNew;

