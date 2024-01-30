const express = require('express')
require('dotenv').config();
const app = express();

require('./dbConnect').connect();

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/s',require('.//.router'));

app.listen( process.env.PORT || 3535 )