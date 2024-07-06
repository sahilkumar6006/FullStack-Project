const express = require('express');
const router = require('./Routes/Category');
const app = express();
const mongoose = require('mongoose');
const students = require('./Routes/Student');


mongoose.connect('mongodb://127.0.0.1/EducationPlatform')
.then(() => console.log("connection is sucessfully"))
.catch(err => console.log('couldn\'t connect', err));

app.use(express.json());
app.use(router);
app.use(students);

const port = process.env.PORT || 3000; // Corrected access to environment variable PORT
app.listen(port, () => console.log('Listening on port', port));
