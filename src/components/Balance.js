import React, { useContext } from 'react';
import { TransactionContext } from './transContext';

function Balance(){
    const {trans} = useContext(TransactionContext);
    const amount = trans.map(tran => tran.amount);
    const total = amount.reduce((a, c) => (a + c), 0);
    return(
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{total >= 0 ? "$"+total : "-$"+Math.abs(total)}</h1>
        </>
    );
}

export default Balance;