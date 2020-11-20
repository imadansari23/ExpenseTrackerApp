import React, { createContext, useReducer } from 'react';

const initialState = {
    transaction: []
};

export const TransactionContext = createContext(initialState);

const Reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                transaction : state.transaction.filter(a => a.id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transaction : [...state.transaction, action.payload]
            }
        default:
            return state;
    }
}

export const TransProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const deleteTransaction = (id) => {
        dispatch({
            type : 'DELETE',
            payload : id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
           type : 'ADD',
           payload : transaction 
        });
    }

    return (
        <TransactionContext.Provider value = {{
            trans : state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}