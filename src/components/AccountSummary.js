import React, { useContext } from 'react'
import { TransactionContext } from '../context/GlobalState';


export const AccountSummary = () => {
  const { transactions } = useContext(TransactionContext);


  function getIncome(){
      let income = 0;
      for (let i = 0; i < transactions.length; i++) {
          if (transactions[i].amount > 0) {
              income += transactions[i].amount;
          }
      }
      return income;
  }

  function getExpense(){
      let expense = 0;
      for (let i = 0; i < transactions.length; i++) {
          if (transactions[i].amount < 0) {
              expense += transactions[i].amount;
          }
      }
      return expense
  }

    return (
        <div className="row text-center">
            <div className="col-sm-6  cl">
                <h4>Income</h4>
                <p className="money plus">
                    ${getIncome()}
                </p>
            </div>
            <div className="col-sm-6 cl">
                <h4>Balance</h4>
                <p className="money minus">
                    ${getExpense()}
                </p>
            </div>
        </div>
    )
}