import React from "react";

function TransactionHistory({ transactions, deleteTransaction }) {
  return (
    <div className="history">
      <h5>history</h5>
      <div className="list">
        {transactions.map((transaction) => (
          <ul>
            <li
              key={transaction._id}
              className={transaction.amount > 0 ? "plus" : "minus"}
            >
              <span>{transaction.title}</span>
              <span>
                {transaction.amount < 0 ? "-" : "+"}৳{" "}
                {Math.abs(transaction.amount)}
              </span>
              <i
                onClick={() => {
                  deleteTransaction(transaction._id);
                }}
                className="fas fa-times-circle icon"
              ></i>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default TransactionHistory;
