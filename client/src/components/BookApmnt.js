import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { addDays } from "date-fns";
import PtntNavbar from "./PtntNavbar";

const BookApmnt = (props) => {
  const navigate = useNavigate();
  const {name} = useParams();  
  const ipatient = window.iname;

  const [startDate, setStartDate] = useState(setHours(setMinutes(addDays(new Date(), 1), 0), 9));

  const [apmntRec, setApmntRec] = useState({
    date: startDate,
    doctor: name,
    patient: ipatient
  });

 
  const onChange = (e) => {
    setApmntRec({ ...apmntRec, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    apmntRec.date = startDate;

    axios
      .post('https://med-web-node.onrender.com/apmnt', apmntRec)  //http://localhost:4000
      .then((res) => {
        setApmntRec({
          date: '',
          doctor: '',
          patient: ''
        });

        // Go to
        navigate('/aList');
      })
      .catch((err) => {
        // console.log('Error in BookApmnt!');
      });
  };

  return (
      <div>
        <div><PtntNavbar /></div>
        <center><h1>Book An Appointment</h1></center>
        <center><p className='lead text-center'>Create new appointment booking</p></center>


        <div class="container">
          <form noValidate onSubmit={onSubmit}>

            <label forHtml="doctor">Doctor</label>
            <input type="text" id="doctor" placeholder="Doctor" readOnly 
                name='doctor' value={apmntRec.doctor}
                onChange={onChange}
            />
            
            <label forHtml="patient">Patient</label>
            <input type="text" id="patient" placeholder="Patient" readOnly 
                name='patient' value={apmntRec.patient}
                onChange={onChange}
            />

            <label forHtml="gen">Date : Select a date between tomorrow and 14 days in the future</label>
            <DatePicker
              selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={addDays(new Date(), 1)}
                maxDate={addDays(new Date(), 14)}
                placeholderText="Select a date between tomorrow and 14 days in the future"
              showTimeSelect
                minTime={setHours(setMinutes(new Date(), 0), 9)}
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                dateFormat="yyyy-MM-dd HH:mm"
            />

            <input type="submit" value="Book Appointment" />
          </form>
        </div>
      </div>
  );
};

export default BookApmnt;

