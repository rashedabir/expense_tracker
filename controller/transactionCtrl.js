const Transaction = require("../models/TransactionModel");

const transactionCtrl = {
  addTransaction: async (req, res) => {
    try {
      const { title, amount } = req.body;
      if (!title) {
        return res.status(500).json({ msg: "Invalid" });
      }
      const newTransaction = new Transaction({
        user: req.user.id,
        title: title,
        amount: amount,
      });
      await newTransaction.save();
      res.json({ newTransaction });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getTransaction: async (req, res) => {
    try {
      const transactions = await Transaction.find({ user: req.user.id });
      res.json({ transactions });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteTransaction: async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.id)
      if(!transaction){
        return res.status(400).json({ msg: "transaction Not Found" });
      }
      if (transaction.user.toString() !== req.user.id) {
        return res.status(400).json({ msg: "Not Authorized" });
      }
      await Transaction.findByIdAndRemove(req.params.id)
      res.json("Transaction Deleted")
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};

module.exports = transactionCtrl;
