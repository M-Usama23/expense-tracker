import React, { useContext } from 'react'
import { TransactionContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }

export const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map(transaction => transaction.amount);
  let total = 0;
  for (let n of amounts){
        total += n;
  }
//   const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <div className="row">
            <div className="col-sm-4">
                <h4>Your Balance</h4>
                <h1>${total}</h1>
            </div>
        </div>
    )
}
