const mongoose = require('mongoose');
const Model = require('../models/postModel');


const getAllPosts = async (req, res) => {
  try {
    const data = await Model.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOnePost = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Model.findById(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewPost = async (req, res) => {
  const post = req.body;

  const newPost = new Model({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Model.findByIdAndDelete(id);
    res.json(`User with ${data.name} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  updateOnePost,
  deleteOnePost,
};
