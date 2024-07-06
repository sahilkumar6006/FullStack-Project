const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(() => console.log("connection is sucessfully"))
.catch(err => console.log('couldn\'t connect', err));


//Schema
const courseSchema = new mongoose.Schema({
  // name: 'string',
  name: {type:String, required: true},
  creator:{type:String, required: true},
  publishedDate: {type: Date, default: Date.now},
  isPublished:{type:Boolean, required: true},
})

//classes & objects 
//car, BMW

const Course = mongoose.model('Course',courseSchema);

 async function createCourse(){

  const course = new Course({
    name: 'java',
    creator: 'jasbir',
    isPublished: true,
  })
  const result = await course.save();
  console.log(result);
}

createCourse();





// async function getCourses(){
// const courses = await Course.find({creator: 'stevee'}).select({name:1})
// console.log(courses)
// }


// getCourses();








// async function  updateCourse(id){
// let course = await Course.findById(id);

// if(!course)return;

// course.name ="python"
// course.creator = "stevee"
// const updateCourseResult = await course.save();
// console.log(updateCourseResult)
// }

// updateCourse('66423e15d6571b24cf40d9d8');



// async function deleteCourse(id) {
//   let course = Course.findByIdAndDelete(id);
//   console.log(course)
// }

// deleteCourse('66410969a753afdce132a0af');