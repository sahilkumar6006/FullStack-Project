const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 }
});

const Category = mongoose.model('Category', CategorySchema);

router.get('/api/category', async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/api/category', async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }

  try {
    const category = new Category({
      name: req.body.name,
    });
    await category.save();
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/api/category/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send("Category not found");

    category.name = req.body.name;
    await category.save();
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/api/category/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).send("Category not found");

    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
