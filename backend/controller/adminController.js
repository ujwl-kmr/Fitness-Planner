const login = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    require('dotenv').config();
  
    if (email === `${process.env.ADMIN}` && password === `${process.env.PASSWORD}`) {
      res.status(200).json({ message: 'Login successful' });

    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  
  module.exports = {
    login,
  };
  