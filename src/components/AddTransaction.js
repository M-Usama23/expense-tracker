import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/GlobalState'


export const AddTransaction = () => {
    let [description, setDescription] = useState();
    let [transaction, setTransaction] = useState();

    let { addTransaction } = useContext(TransactionContext);


    function TransactionAdd() {
        addTransaction({
            id: Math.floor(Math.random() * 100000000),
            desc: description,
            amount: +transaction
        })
    }
    return (
        <div className="row ">
            <div className="col-sm-12">
                <h4 className="his"> Add new transaction</h4>
            </div>
            <div className="col-sm-12">
                <label for="text" className="form-label">Description</label>
                <input type="text"
                    class="form-control"
                    id="text"
                    placeholder="Detail of transaction..."
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);

                    }}
                />
            </div>
            <div className="col-sm-12">
                <label for="expense" className="form-label">Transaction Amount</label>
                <input type="number"
                    class="form-control"
                    id="expense"
                    placeholder="Enter amount..."
                    value={transaction}
                    onChange={(e) => {
                        setTransaction(e.target.value);
                        console.log(description);

                    }}
                />
            </div>
            <div className="col-sm-12">
                <button className="btn btn-success btn-block" onClick={() => {
                    TransactionAdd();
                }}>Add transaction</button>
            </div>
        </div>
    )
}