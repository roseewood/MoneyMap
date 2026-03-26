const Transaction = require("../models/Transaction");

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add transaction
exports.addTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const saved = await transaction.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete transaction
exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};