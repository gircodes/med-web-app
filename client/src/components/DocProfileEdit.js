import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DocNavbar from "./DocNavbar";
import axios from 'axios';
import '../App.css';

function UpdateDocInfo(props) {
  const [doc, setDoc] = useState({
    name: '',
    age: '',
    gen: '',
    speciality: '',
    active: '',
    email: '',
    pwd: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:4000/doc/prm', {params:{id:id}})
      .then((res) => {
        setDoc({
          name: res.data.name,
          age: res.data.age,
          gen: res.data.gen,
          speciality: res.data.speciality,
          active: res.data.active,
          email: res.data.email,
          pwd: res.data.pwd
        });
        // console.log('gotten :' +res.data.name);
      })
      .catch((err) => {
        // console.log('Error 1 from UpdateDocInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setDoc({ ...doc, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: doc.name,
      age: doc.age,
      gen: doc.gen,
      speciality: doc.speciality,
      active: doc.active,
      email: doc.email,
      pwd: doc.pwd
    };

    axios
      .put(`http://localhost:4000/doc/${id}`, data)
      .then((res) => {
        navigate(`/dProfile/${data.name}`);
      })
      .catch((err) => {
        // console.log('Error 2 from UpdateDocInfo!');
      });
  };

  return (
        <div>
        <div><DocNavbar /></div>
        <center><h1>Update Doctor's Profile</h1></center>
        <center><p className='lead text-center'>Update Doctor's Info</p></center>


        <div class="container">
          <form noValidate onSubmit={onSubmit}>

            <label forHtml="name">Name</label>
            <input type="text" id="name" placeholder="Name"
                name='name' value={doc.name}
                onChange={onChange}
            />
            
            <label forHtml="age">Age</label>
            <input type="text" id="age" placeholder="Age"
                name='age' value={doc.age}
                onChange={onChange}
            />

            <label forHtml="gen">Gender</label>
            <select id="gen" name="gen"
                value={doc.gen}
                onChange={onChange}>>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            
            <label forHtml="speciality">Speciality</label>
            <input type="text" id="speciality" placeholder="Speciality"
                name='speciality' value={doc.speciality}
                onChange={onChange}
            />
            
            <label forHtml="active">Active</label>
            <input type="text" id="active" placeholder="Active"
                name='active' value={doc.active}
                onChange={onChange}
            />
            
            <label forHtml="email">Email</label>
            <input type="text" id="email" placeholder="Email"
                name='email' value={doc.email}
                onChange={onChange}
            />
            
            <label forHtml="pwd">Password</label>
            <input type="text" id="pwd" placeholder="Password"
                name='pwd' value={doc.pwd}
                onChange={onChange}
            />

            <input type="submit" value="Update Doctor" />
          </form>
        </div>
    </div>
  );
}

export default UpdateDocInfo;


