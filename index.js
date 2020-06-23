require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/files', express.static(path.resolve(__dirname, 'src', 'temp', 'uploads')));

require('./src/app/controllers/index.js')(app);


app.listen(process.env.PORT || 3333);