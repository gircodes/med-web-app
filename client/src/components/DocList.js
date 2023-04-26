import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import DocRec from "./DocRec";
import PtntNavbar from "./PtntNavbar";

function DocList() {
  const [docs, setDocs] = useState([]);
  const active = 'Yes';

  useEffect(() => {
      axios.get('http://localhost:4000/doc/prm', {
        params: {active: active}})
      .then((res) => {setDocs(res.data);})
      .catch((err) => {
        // console.log('Error 1 from DocList');
      });
  }, [active]);

  const docList =
    docs.length === 0
      ? 'There are no doctors record!'
      : docs.map((docs, k) => <DocRec docr={docs} key={k} />);

  return (
    <div>
        <div><PtntNavbar /></div>
        <h1 className='display-4 text-center'>List of Active Doctors</h1>
        <table className="center" style={{ width: "80%" }}>
          <thead>
            <tr>
                <th>Doctor</th>
                <th>Speciality</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Meet the Doctor</th>
            </tr>
          </thead>
            <tbody>{docList}</tbody>
      </table>
    </div>
  );
};

export default DocList;

