const User = require('../models/User');

async function handlerUserSignUp(req, res) {
  const { name, email, password } = req.body;  // Extract name, email, and password from the request body
  
  try {
    const newUser = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = handlerUserSignUp;
