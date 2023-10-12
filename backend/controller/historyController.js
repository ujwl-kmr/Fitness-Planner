const History = require('../models/history');

const saveResponseToHistory = async (req, res) => {
  const { response, email, user_id, status} = req.body;

  try {
    // Create a new record in the history collection
    const newHistoryEntry = new History({ response, email, user_id, status });
    await newHistoryEntry.save();

    res.status(201).json({ message: 'Response saved to history successfully' });
  } catch (error) {
    console.error('Error saving response to history:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

const getHistory = async (req, res) => {
  try {
    const historyDetail = await History.find().exec();
    res.status(200).json(historyDetail);
  } catch (error) {
    console.error('Error getting history details:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

module.exports = {
  saveResponseToHistory,
  getHistory
};
