const UserDetails = require('../models/userDetails');

const saveUserDetails = async (req, res) => {
  const formData = req.body;

  try {
    const newUserDetails = new UserDetails(formData);
    await newUserDetails.save();

    res.status(201).json({ message: 'User details saved successfully' });
  } catch (error) {
    console.error('Error saving user details:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const userDetail = await UserDetails.find().exec();
    res.status(200).json(userDetail);
  } catch (error) {
    console.error('Error getting user details:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

const deleteUserDetails = async (req, res) => {
  const userId = req.params.user_id; // Assuming userId is passed as a parameter

  try {
    const deletedUserDetails = await UserDetails.findOneAndDelete( userId );

    if (!deletedUserDetails) {
      return res.status(404).json({ message: 'UserDetails record not found.' });
    }

    res.status(200).json({ message: 'UserDetails record deleted successfully.' });
  } catch (error) {
    console.error('Error deleting UserDetails record:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};


module.exports = {
  saveUserDetails,
  getUserDetails,
  deleteUserDetails
};
