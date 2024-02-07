const express = require('express')
const app = express();

require('dotenv').config();

const jwt =require('jsonwebtoken')
const cors = require('cors');

app.use(cors());
app.use(express.json());

require('./dbConnect').connect();



app.use('/neighborsDetails', require('./neighbor/neighborsDetails.router'));


app.listen( process.env.PORT || 3535 )