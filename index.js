const express = require('express')
const app = express();

require('dotenv').config();

const jwt =require('jsonwebtoken');
const cors = require('cors');

app.use(cors());
app.use(express.json());

require('./DB/dbConnect').connect();


// app.use('/login',require('./registration/registration.router.js/login.router'));
app.use('/homePortal', require('./building/building.router'));
app.use('/homePortal/registration', require('./registration/registration.router'));

app.listen( process.env.PORT || 3535 );