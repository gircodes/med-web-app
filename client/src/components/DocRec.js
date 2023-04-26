import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const DocRec = (props) => {
  const docrc = props.docr;
  const name = docrc.name;
  
  return (
    	<tr>
    	  <td>{docrc.name}</td>
    	  <td>{docrc.speciality}</td>
    	  <td>{docrc.age}</td>
    	  <td>{docrc.gen}</td>
    	  <td><Link to={`/book/${name}`}> 
    	  		Book Appointment
  		    </Link>
    	  </td>
      </tr>
  );
};

export default DocRec;
