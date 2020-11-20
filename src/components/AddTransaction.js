import React, { useState, useContext } from 'react';
import { TransactionContext } from './transContext';

export function AddTransaction(){
    const [desc, setDesc] = useState("");
    const[amount, setAmount] =useState();
    const {addTransaction} = useContext(TransactionContext);
    const onSubmit = (e) => {
        e.preventDefault();

        if (amount === 0 && desc === "") {
            alert("PLEASE FILL ALL THE FIELDS")
        }else{

        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            amount : +amount,
            desc
        }
        setAmount(0);
        setDesc("");
        addTransaction(newTransaction);
    }}
    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}