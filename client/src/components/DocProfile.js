import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DocNavbar from "./DocNavbar";
import PtntNavbar from "./PtntNavbar";
import '../App.css';
import axios from 'axios';

function DocProfile(props) {
  const [doc, setDoc] = useState({});
  const { name } = useParams();

  useEffect(() => {
    axios
      .get('https://med-web-node.onrender.com/doc/prm', {params: {name:name}})  //http://localhost:4000
      .then((res) => {
        setDoc(res.data);
      })
      .catch((err) => {
        // console.log('Error from DocProfile');
      });
  }, [name]);

  const DocAttrib = (
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{doc.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Age</td>
            <td>{doc.age}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Gender</td>
            <td>{doc.gen}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Speciality</td>
            <td>{doc.speciality}</td>
          </tr>
          {window.isadoc === true ? (
          <tr>
            <th scope='row'>5</th>
            <td>Active</td>
            <td>{doc.active}</td>
          </tr>
           ) : ''}
          {window.isadoc === true ? (
          <tr>
            <th scope='row'>6</th>
            <td>Email</td>
            <td>{doc.email}</td>
          </tr>
           ) : ''}
          {window.isadoc === true ? (
          <tr>
            <th scope='row'>7</th>
            <td>Password</td>
            <td>{doc.pwd}</td>
          </tr>
           ) : ''}
        </tbody>
  );

  return (
    <div>
      <div>
        {window.isadoc ? <DocNavbar /> : <PtntNavbar />}
      </div>
      <div>
          <div className='row'>
            <br />
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Doctor's Profile</h1>
              <p className='lead text-center'>View Doctor's Info</p>
            </div>

            <table className="center" style={{ width: "80%" }}>
              {DocAttrib}
            </table>
            
            <div><br/><center>
              {window.isadoc === true ? (
                <div>
                  <Link className="proedit" to={`/dProfileEdit/${doc._id}`}>
                      Edit Doctor's Profile
                  </Link> 
                </div>) : ''
              }
              </center></div>
          </div>
        {/*</div>*/}
      </div>
      <br/><br/>
    </div>
  );
}

export default DocProfile;

