const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  enrolled: { type: Boolean,default: false},
  phone: { type: String, required: true, minlength:10, maxlength:25}
});

const Student = mongoose.model('Student', studentSchema);

router.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/api/students', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }

  try {
    const students = new Student({
      name: req.body.name,
      isEnrollment: req.body.isEnrollment,
      phone: req.body.phone
    });
    await students.save();
    res.send(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/api/students/:id', async (req, res) => {
  try {
    const category = await Student.findById(req.params.id);
    if (!category) return res.status(404).send("Category not found");

    category.name = req.body.name;
    await category.save();
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/api/students/:id', async (req, res) => {
  try {
    const category = await Student.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).send("Category not found");

    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
