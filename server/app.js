const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Routes
const doc_route = require('./routes/doc_route');
const ptnt_route = require('./routes/ptnt_route');
const apmnt_route = require('./routes/apmnt_route');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/doc', doc_route);
app.use('/ptnt', ptnt_route);
app.use('/apmnt', apmnt_route);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));

