
const express = require('express');
const routerA = express.Router();

// Load appointment model
const Apmnt = require('../models/ApmntMod');

routerA.get('/test', (req, res) => res.send('appointment route testing!'));

routerA.get('/', (req, res) => {
  Apmnt.find()
    .then((appointments) => res.json(appointments))
    .catch(err => res.status(404).json({ noapmntfound: 'No Appointment found' }));
});

routerA.get('/prmD', (req, res) => {
  if (req.query.doctor) {
    Apmnt.find({doctor:req.query.doctor})
    .then((appointment) => res.json(appointment))
    .catch(err => res.status(404).json({ nodoctorfound: 'No Doctor Appointment found _GfbN' }));
  } 
});

routerA.get('/prmP', (req, res) => {
  if (req.query.patient) {
    Apmnt.find({patient:req.query.patient})
    .then((appointment) => res.json(appointment))
    .catch(err => res.status(404).json({ nopatientfound: 'No Patient Appointment found _GfbN' }));
  }
});

routerA.get('/gbid', (req, res) => {
    Apmnt.findById(req.query.id)
      .then((appointment) => res.json(appointment))
      .catch(err => res.status(404).json({ noapmntfound: 'No Appointment found' }));
});

routerA.post('/', (req, res) => {
  Apmnt.create(req.body)
    .then((appointment) => res.json({ msg: 'Appointment added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Appointment' }));
});

routerA.put('/:id', (req, res) => {
  Apmnt.findByIdAndUpdate(req.params.id, req.body)
    .then((appointment) => res.json({ msg: 'Database Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

routerA.delete('/:id', (req, res) => {
  Apmnt.findByIdAndRemove(req.params.id, req.body)
    .then((appointment) => res.json({ mgs: 'Appointment entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an Appointment' }));
});

routerA.get('/:doctor', (req, res) => {
  Apmnt.find({doctor:req.params.doctor})
    .then((appointments) => res.json(appointments))
    .catch(err => res.status(404).json({ noapmntfound: 'No Appointment found' }));
});

routerA.get('/:patient', (req, res) => {
  Apmnt.find({patient:req.params.patient})
    .then((appointments) => res.json(appointments))
    .catch(err => res.status(404).json({ noapmntfound: 'No Appointment found' }));
});


module.exports = routerA;

