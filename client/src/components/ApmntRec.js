import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const ApmntRec = (props) => {
  const apmnt = props.apmnt;

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:4000/apmnt/${id}`)
      .then((res) => {
        alert('Appointment is deleted');
        props.handler();
      })
      .catch((err) => {
        // console.log('Error form ApmntRecord_deleteClick');
      });
  };

  if (window.isadoc) {
    return (
       <tr className="center">
          <td>{apmnt.status}</td>
          <td>{(new Date(apmnt.date)).toLocaleDateString('en-GB', {
                year: 'numeric', month: 'short', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short'})}</td>
          <td>{apmnt.doctor}</td>
          <td>
            <Link to={`/pProfile/${apmnt.patient}`}>{apmnt.patient}</Link>
          </td>
          <td>{apmnt.ptntcall}</td>
          <td>{apmnt.prescription}</td>
          <td>{apmnt.ptntcancel}</td>
          <td> <a href="https://zoom.us/signin" target="_blank" rel="noopener noreferrer">Zoom Call</a></td>
          <td>
            <Link to={`/dApmntEdit/${apmnt._id}`}>Edit</Link> | 
            <button onClick={() => {
                onDeleteClick(apmnt._id); }} >
              Delete
            </button>
          </td>
       </tr>
    )
  } else {
    return (
       <tr>
        <td>{apmnt.status}</td>
        <td>{(new Date(apmnt.date)).toLocaleDateString('en-GB', { 
              year: 'numeric', month: 'short', day: 'numeric', 
              hour: '2-digit', minute: '2-digit', timeZoneName: 'short'})}</td>
        <td>
          <Link to={`/dProfile/${apmnt.doctor}`}>{apmnt.doctor}</Link>
        </td>
        <td>{apmnt.patient}</td>
        <td>{apmnt.ptntcall}</td>
        <td>{apmnt.prescription}</td>
        <td>{apmnt.ptntcancel}</td>
        <td> <a href="https://zoom.us/signin" target="_blank" rel="noopener noreferrer">Zoom Call</a></td>
        <td>
          <Link to={`/pApmntEdit/${apmnt._id}`}>Edit</Link>
        </td>
       </tr>
    );
  };
};

export default ApmntRec;



