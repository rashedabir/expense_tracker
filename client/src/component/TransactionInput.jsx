import React from "react";

function TransactionInput({
  title,
  setTitle,
  amount,
  setAmount,
  addTransaction,
}) {
  return (
    <div className="transaction">
      <h5>Add transaction</h5>
      <form onSubmit={addTransaction}>
        <div className="mb-3">
          <label className="mb-1">text</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type Text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>amount</label>
          <label className="mb-1">
            (negetive - expense, positive - income)
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="mb-2" type="submit">
          add transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionInput;
