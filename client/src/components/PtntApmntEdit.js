import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { addDays } from "date-fns";
import PtntNavbar from "./PtntNavbar";

function PtntApmntEdt(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [startDate, setStartDate] = useState(setHours(setMinutes(addDays(new Date(), 1), 0), 9));

  const [apmnt, setApmnt] = useState({
    status: '',
    date: '',
    doctor: '',
    patient: '',
    ptntcall: '',
    prescription: '',
    ptntcancel: ''
  });


  useEffect(() => {
    axios
      .get('http://localhost:4000/apmnt/gbid', {params:{id:id}})
      .then((res) => {
        setApmnt({
          status: res.data.status,
          date: (new Date(res.data.date)).toLocaleDateString('en-GB', {     //.toString(),
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
        // console.log('Error from PtntApmntEdt');
      });
  }, [id, apmnt.date]);

  const onChange = (e) => {
    setApmnt({ ...apmnt, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    apmnt.date = startDate;

    const data = {
      date: apmnt.date,
      ptntcancel: apmnt.ptntcancel
    };

    axios
      .put(`http://localhost:4000/apmnt/${id}`, data)
      .then((res) => {
        navigate(`/aList`);
      })
      .catch((err) => {
        // console.log('Error in PtntApmntEdt!');
      });
  };

  return (
      <div>
      <div><PtntNavbar /></div>
      <center><h1>Edit Appointment List</h1></center>
      <center><p className='lead text-center'>Update Patients Appointment</p></center>

      <div class="container">
        <form noValidate onSubmit={onSubmit}>

          <label forHtml="status">Status</label>
          <select id="status" name="status"
              value={apmnt.status} disabled 
              onChange={onChange}> 
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <label forHtml="date">Date : Select a date between tomorrow and 14 days in the future.</label>
          <DatePicker
              selected={startDate}
                value={apmnt.date}
                onChange={(date) => setStartDate(date)}
                minDate={addDays(new Date(), 1)}
                maxDate={addDays(new Date(), 14)}
                placeholderText="Select a date between tomorrow and 14 days in the future"
              showTimeSelect
                minTime={setHours(setMinutes(new Date(), 0), 9)}
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                dateFormat="yyyy-MM-dd HH:mm"
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
          <input type="text" id="ptntcall" placeholder="Patient Zoom Call Link" readOnly
              name='ptntcall' value={apmnt.ptntcall}
              onChange={onChange}
          />

          <label forHtml="prescription">Prescription</label>
          <textarea id="prescription" placeholder="Doctors Prescription" rows={4} readOnly name='prescription' defaultValue={apmnt.prescription} onChange={onChange}
          />

          <label forHtml="ptntcancel">Patient Cancel</label>
          <select id="ptntcancel" name="ptntcancel"
              value={apmnt.ptntcancel}
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

export default PtntApmntEdt;

