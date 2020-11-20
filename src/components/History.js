import React, { useContext } from 'react';
import { TransactionContext } from './transContext';


export function History() {
    const { trans, deleteTransaction } = useContext(TransactionContext);
    return (
        
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {trans.map((transaction, index) =>
                    (<li key={index} className={transaction.amount > 0 ? "plus" : "minus"}>
                    {transaction.desc}<span>{transaction.amount}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button></li>))}
            </ul>
        </>
    );
}