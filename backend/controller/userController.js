const User = require('../models/user');

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;  // Changed from number to phone

  try {
    const user = new User({ name, email, phone, password });  // Changed from number to phone
    await user.save();
    res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed.', error: error.message });
  }
};

module.exports = {
  registerUser,
};

