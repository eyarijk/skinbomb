import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';

const TransactionsContext = createContext({});

function TransactionsProvider({ children }) {
  const { token } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [isTransactionsLoaded, setIsTransactionsLoaded] = useState(false);

  const getTransactions = async () => {
    try {
      const payload = await fetch('/user/transactions');

      setTransactions(payload.data);
      setIsTransactionsLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  useEffect(() => {
    if (token) {
      getTransactions();
    }
  }, [token]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getTransactions,
        isTransactionsLoaded,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

TransactionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTransactions = () => {
  return useContext(TransactionsContext);
};

export { TransactionsProvider, useTransactions };
