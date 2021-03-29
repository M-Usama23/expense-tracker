import React, {useContext} from 'react'
import { TransactionContext } from '../context/GlobalState'

export const TransactionHistory = () => {
    let {transactions, deleteTransaction} = useContext(TransactionContext);
    // console.log(transactions);
    return (
        <div className="row">
            <div className="col-sm-12">
                <h4 className="his">History</h4>
            </div>
            {transactions.map((transObj, ind)=>{
                return(
                    <div className={transObj.amount < 0 ? 'row box-minus' : 'row box-plus' } key={ind}>
                        <div className="col-sm-3">
                        <button onClick={() => deleteTransaction(transObj.id)} className="delete-btn">x</button>
                            {transObj.desc}
                        </div>
                        <div className="col-sm-1 offset-sm-8">
                            {transObj.amount}
                        </div>
                    </div>
                )

            })}
        </div>
    )
}
