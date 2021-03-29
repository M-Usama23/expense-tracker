import React, { createContext, useReducer} from 'react';
import TransactionReducer from './AppReducer'



const  initialTransaction = {
    transactions:[]
}

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({children})=>{


    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction)
    
    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload:transObj
        }) 
    }
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    console.log(state.transactions);
    return(
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}