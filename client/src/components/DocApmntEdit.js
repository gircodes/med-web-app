import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DocNavbar from "./DocNavbar";
import axios from 'axios';
import '../App.css';

function DocApmntEdt(props) {
  const [apmnt, setApmnt] = useState({
    status: '',
    date: '',
    doctor: '',
    patient: '',
    ptntcall: '',
    prescription: '',
    ptntcancel: ''
  });

  const { id } = useParams();  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://med-web-node.onrender.com/apmnt/gbid', {params:{id:id}})  //http://localhost:4000
      .then((res) => {
        setApmnt({
          status: res.data.status,
          date: (new Date(res.data.date)).toLocaleDateString('en-GB', {
                year: 'numeric', month: 'short', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short'}),
          doctor: res.data.doctor,
          patient: res.data.patient,
          ptntcall: res.data.ptntcall,
          prescription: res.data.prescription,
          ptntcancel: res.data.ptntcancel
        });
      })
      .catch((err) => {
        // console.log('Error from DocApmntEdt');
      });
  }, [id]);

  const onChange = (e) => {
    setApmnt({ ...apmnt, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      status: apmnt.status,
      date: apmnt.date,
      doctor: apmnt.doctor,
      patient: apmnt.patient,
      ptntcall: apmnt.ptntcall,
      prescription: apmnt.prescription,
      ptntcancel: apmnt.ptntcancel
    };

    axios
      .put(`https://med-web-node.onrender.com/apmnt/${id}`, data)   //http://localhost:4000
      .then((res) => {
        navigate(`/aList`);
      })
      .catch((err) => {
        // console.log('Error in DocApmntEdt!');
      });
  };

  return (
      <div>
      <div><DocNavbar /></div>
      <center><h1>Edit Appointment List</h1></center>
      <center><p className='lead text-center'>Update Doctors Appointment</p></center>


      <div class="container">
        <form noValidate onSubmit={onSubmit}>

          <label forHtml="status">Status</label>
          <select id="status" name="status"
              value={apmnt.status}
              onChange={onChange}>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <label forHtml="date">Date</label>
          <input type="text" id="date" placeholder="Appointment Date" readOnly
              name='date' value={apmnt.date}
              onChange={onChange}
          />

          <label forHtml="doctor">Doctor</label>
          <input type="text" id="doctor" placeholder="Doctor"
              name='doctor' value={apmnt.doctor} readOnly
              onChange={onChange}
          />

          <label forHtml="patient">Patient</label>
          <input type="text" id="patient" placeholder="Patient" readOnly
              name='patient' value={apmnt.patient}
              onChange={onChange}
          />

          <label forHtml="ptntcall">Patient Call</label>
          <input type="text" id="ptntcall" placeholder="Patient Zoom Call Link"
              name='ptntcall' value={apmnt.ptntcall}
              onChange={onChange}
          />

          <label forHtml="prescription">Prescription</label>
          <textarea id="prescription" placeholder="Doctors Prescription" rows={4} name='prescription' defaultValue={apmnt.prescription} onChange={onChange}
          />

          <label forHtml="ptntcancel">Patient Cancel</label>
          <select id="ptntcancel" name="ptntcancel"
              value={apmnt.ptntcancel} disabled 
              onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>

          <input type="submit" value="Update Appointment" />
        </form>
      </div>

    </div>
  );
}

export default DocApmntEdt;


