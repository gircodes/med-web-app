import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import ApmntRec from './ApmntRec';
import DocNavbar from "./DocNavbar";
import PtntNavbar from "./PtntNavbar";

function ApmntList(props) {
  let name = window.iname;
  let [apmnts, setApmnts] = useState([]);

  const loadData = () => {
    if (window.isadoc) {
      axios.get('https://med-web-node.onrender.com/apmnt/prmD', {params: {doctor:name}})  //http://localhost:4000
      .then((res) => {setApmnts(res.data);})
      .catch((err) => {console.log('Error 1 from ApmntList');} );
    } else {
      axios.get('https://med-web-node.onrender.com/apmnt/prmP', {params: {patient:name}})  //http://localhost:4000
        .then((res) => {setApmnts(res.data);})
        .catch((err) => {console.log('Error 2 from ApmntList');});
    }
  }

  useEffect(() => {
    loadData();
  }, [name, loadData]);

  const apmntList =
    apmnts.length === 0 ? 'There are no appointment records!' : apmnts.map((apmnt, k) => <ApmntRec apmnt={apmnt} key={k} handler={loadData}/>);

  return (
    <div>
      <div>
        {window.isadoc ? <DocNavbar /> : <PtntNavbar />}
      </div>
      <h1 className='display-4 text-center'>Appointment List</h1>
      <table className="center" style={{ width: "80%" }}>
          <thead>
            <tr>
                <th>Status</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Patient</th>
                <th>Patient Call Link</th>
                <th>Prescription</th>
                <th>Patient Cancel</th>
                <th>Make Call</th>
                <th>Action</th>
            </tr>
          </thead>
            <tbody>{apmntList}</tbody>
      </table>
      <br />
      <div>
        <center>
          {'Doctor will connect within 15 mins prior to the scheduled appointment time.'}
        </center>
      </div>
      <div>
        <center>
          {'Patients will get their "call link" 15 min prior to the scheduled appointment time, using which they can join the doctor.'}
        </center>
      </div>
      <br />
    </div>
  )
}

export default ApmntList;

