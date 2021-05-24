import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../GlobalState";
import Error from "./Error";
import IncomeExpense from "./IncomeExpense";
import TransactionHistory from "./TransactionHistory";
import TransactionInput from "./TransactionInput";

function Dashboard() {
  const state = useContext(GlobalState);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [transactions] = state.transactionAPI.transaction;
  const [callback, setCallback] = state.transactionAPI.callback;
  const [token] = state.token;
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const addTransaction = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/transaction",
        {
          title: title,
          amount: amount,
        },
        { headers: { Authorization: token } }
      );
      setTitle("");
      setAmount("");
      setCallback(!callback);
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      if (window.confirm("Do You Want to Delete this Transaction?")) {
        await axios.delete(`/api/transaction/${id}`, {
          headers: { Authorization: token },
        });
      }
      setCallback(!callback);
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="transaction-box">
        <h5>expense tracker</h5>
        <h3>your balance</h3>
        <h2>৳ {total}</h2>
        <IncomeExpense income={income} expense={expense} />
        {transactions.length === 0 ? null : (
          <TransactionHistory
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        )}
        <TransactionInput
          title={title}
          setTitle={setTitle}
          amount={amount}
          setAmount={setAmount}
          addTransaction={addTransaction}
        />
      </div>
      {error.length === 0 ? null : <Error error={error} setError={setError} />}
    </div>
  );
}

export default Dashboard;
