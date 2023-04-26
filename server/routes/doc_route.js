
const express = require('express');
const routerD = express.Router();

// Load doctor model
const Doc = require('../models/DoctorMod');

routerD.get('/test', (req, res) => res.send('doctor route testing!'));

routerD.get('/', (req, res) => {
  Doc.find()
    .then((doctors) => res.json(doctors))
    .catch(err => res.status(404).json({ nodoctorfound: 'No Doctor found _Gfm' }));
});

routerD.get('/prm', (req, res) => {
  if (req.query.pwd && req.query.email) {
      Doc.findOne({pwd:req.query.pwd, email:req.query.email})
    .then((doctors) => res.json(doctors))
    .catch(err => res.status(404).json({ nodoctorfound: 'No Doctor found _Gf1' }));
  } else if (req.query.active) {
      Doc.find({active:req.query.active})
    .then((doctors) => res.json(doctors))
    .catch(err => res.status(404).json({ nodoctorfound: 'No Doctor found 4' }));
  } else if (req.query.name) {
    Doc.findOne({name:req.query.name})
    .then((doctor) => res.json(doctor))
    .catch(err => res.status(404).json({ nodoctorfound: 'No Doctor found 5' }));
  } else if (req.query.id) {
      Doc.findById(req.query.id)
      .then((doctor) => res.json(doctor))
      .catch(err => res.status(404).json({ nodoctorfound: 'No Doctor found _Gfbid' }));
  }
});

routerD.post('/', (req, res) => {
  Doc.create(req.body)
    .then((doctor) => res.json({ msg: 'Doctor added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this doctor' }));
});

routerD.put('/:id', (req, res) => {
  Doc.findByIdAndUpdate(req.params.id, req.body)
    .then((doctor) => res.json({ msg: 'Database Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

routerD.delete('/:id', (req, res) => {
  Doc.findByIdAndRemove(req.params.id, req.body)
    .then((doctor) => res.json({ mgs: 'Doctors entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Doctor' }));
});

module.exports = routerD;

