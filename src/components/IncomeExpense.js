import React, { useContext } from 'react';
import { TransactionContext } from './transContext';

export function IncomeExpense() {
    const { trans } = useContext(TransactionContext);
    const amount = trans.map(items => items.amount)
    const income = amount.filter(income => income > 0).reduce((a, b) => (a + b), 0)
    const expense = Math.abs(amount.filter(income => income < 0).reduce((a, b) => (a + b), 0))
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expense}</p>
            </div>
        </div>
    );
}