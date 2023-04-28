import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DocNavbar from "./DocNavbar";
import PtntNavbar from "./PtntNavbar";
import '../App.css';
import axios from 'axios';

function PtntProfile(props) {
  const [ptnt, setPtnt] = useState({});
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://med-web-node.onrender.com/ptnt/prm`, {params: {name:name}})  //http://localhost:4000
      .then((res) => {
        setPtnt(res.data);
      })
      .catch((err) => {
        // console.log('Error from PtntProfile');
      });
  }, [name]);


  // const onDeleteClick = (id) => {
  //   axios
  //     .delete(`https://med-web-node.onrender.com/ptnt/${id}`)  //http://localhost:4000
  //     .then((res) => {
  //       alert('Patient deleted');
  //       navigate('/');
  //     })
  //     .catch((err) => {
  //       console.log('Error form PtntProfile_deleteClick');
  //     });
  // };

  const PtntAttrib = (
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{ptnt.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Age</td>
            <td>{ptnt.age}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Gender</td>
            <td>{ptnt.gen}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Address</td>
            <td>{ptnt.address}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Mobile</td>
            <td>{ptnt.mobile}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Email</td>
            <td>{ptnt.email}</td>
          </tr>
          {window.isadoc === true ? '' : (
          <tr>
            <th scope='row'>7</th>
            <td>Password</td>
            <td>{ptnt.pwd}</td>
          </tr> )}
        </tbody>
  );

  return (
    <div>
      <div>
        {window.isadoc ? <DocNavbar /> : <PtntNavbar />}
      </div>
      <div>
        {/*<div className='row'>*/}
          <div className='row'>
            <br />
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Patient's Profile</h1>
              <p className='lead text-center'>View Patient's Info</p>
            </div>

            <table className="center" style={{ width: "80%" }}>
              {PtntAttrib}
            </table>

            {/*<div className='col-md-6 m-auto'>
              <button
                type='button'
                className='btn btn-outline-danger btn-lg btn-block'
                onClick={() => {
                  onDeleteClick(ptnt._id);
                }}
              >
                Delete Patient
              </button>
            </div>*/}

            <div><br/><center>
            {window.isadoc === true ? '' : (
              <div>
                <Link className="proedit" to={`/pProfileEdit/${ptnt._id}`}>
                  Edit Patient's Profile
                </Link>
              </div>)
            }
            </center></div>
          </div>
        {/*</div>*/}
      </div>
      <br /><br />
    </div>
  );
}

export default PtntProfile;




