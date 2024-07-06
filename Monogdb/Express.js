const express = require('express');

let app = express();

app.use(express.json());

let courses = [
  {id: 1 , name: 'javascript', creator: 'jasbir'},
  {id: 2, name: 'java' ,creator: 'Summet Malik'},
  {id:3, name: 'sahil', creator: 'steve'}
]

app.get('/', function(req,res){
  res.send("welcome to the fucking world!");
})

//Read the Data

app.get('/courses', (req, res) => {
  res.send(courses)
})

//create a Data
app.post('/courses', (req, res) => {
    const data ={
      id: courses.length +1,
      name: req.body.name,

    }
    courses.push(data);
    res.send(courses);
})

//update a Data put request

app.put('/courses/:coursename', (req,res) => {
  console.log(req.body.coursename);
  let course = courses.find(course => course.name === req.body.coursename)
  if(!course) res.status(404).send("Course not found");
  course.name = req.body.coursename;
  res.send(course);
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port', `${port}`));
