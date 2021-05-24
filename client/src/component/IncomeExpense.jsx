import React from 'react'

function IncomeExpense({income, expense}) {
    return (
        <div className="income-expense">
          <div className="income">
            <h4>income</h4>
            <h6>৳ {income}</h6>
          </div>
          <div className="expense">
            <h4>expense</h4>
            <h6>৳ {expense}</h6>
          </div>
        </div>
    )
}

export default IncomeExpense
