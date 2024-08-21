require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { default: router } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(helmet());
app.use(cors());

app.use('/api', router);

app.listen('3000', () => {
    console.log('app running');
})
