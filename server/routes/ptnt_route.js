
const express = require('express');
const routerP = express.Router();

// Load Patient model
const Ptnt = require('../models/PatientMod');

routerP.get('/test', (req, res) => res.send('patient route testing!'));

routerP.get('/', (req, res) => {
  Ptnt.find()
    .then((patients) => res.json(patients))
    .catch(err => res.status(404).json({ nopatientfound: 'No Patients found _Pfm' }));
});

routerP.get('/prm', (req, res) => {
  if (req.query.pwd && req.query.email) {
      Ptnt.findOne({pwd:req.query.pwd, email:req.query.email})
    .then((patients) => res.json(patients))
    .catch(err => res.status(404).json({ nopatientfound: 'No Patient found _Gf1' }));
  } else if (req.query.name) {
    Ptnt.findOne({name:req.query.name})
    .then((patients) => res.json(patients))
    .catch(err => res.status(404).json({ nopatientfound: 'No Patient found 5' }));
  } else if (req.query.id) {
      Ptnt.findById(req.query.id)
      .then((patient) => res.json(patient))
      .catch(err => res.status(404).json({ nopatientfound: 'No Patient found _Gfbid' }));
  }
});

routerP.post('/', (req, res) => {
  Ptnt.create(req.body)
    .then((patient) => res.json({ msg: 'Patient added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this patient' }));
});

routerP.put('/:id', (req, res) => {
  Ptnt.findByIdAndUpdate(req.params.id, req.body)
    .then((patient) => res.json({ msg: 'Database updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

routerP.delete('/:id', (req, res) => {
  Ptnt.findByIdAndRemove(req.params.id, req.body)
    .then((patient) => res.json({ mgs: 'Patient entry deleted successfully'}))
    .catch(err => res.status(404).json({ error: 'No such a patient'}));
});

module.exports = routerP;

