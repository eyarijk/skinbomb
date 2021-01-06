import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';

const TopUpContext = createContext({});

function TopUpProvider({ children }) {
  const { token } = useAuth();
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [usdRubRate, setUsdRubRate] = useState(1);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [isPaymentTypeLoaded, setIsPaymentTypeLoaded] = useState(false);
  const [isPaymentMethodLoaded, setIsPaymentMethodLoaded] = useState(false);

  const getPaymentTypes = async () => {
    try {
      const payload = await fetch('/payment/types');

      setPaymentTypes(payload.data);
      setIsPaymentTypeLoaded(true);
      getPaymentMethods("0")
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  const getPaymentMethods = async (type) => {
    try {
      const payload = await fetch(`/payment/methods/${type}`);

      setPaymentMethods(payload.data);
      setIsPaymentMethodLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  const getUsdRubRate = async () => {
    try {
      const payload = await fetch(`/payment/exchange`);

      setUsdRubRate(payload.value);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  useEffect(() => {
    if (token) {
      getPaymentTypes();
      getUsdRubRate();
    }
  }, [token]);

  return (
    <TopUpContext.Provider
      value={{
        paymentTypes,
        paymentMethods,
        usdRubRate,
        getPaymentTypes,
        getPaymentMethods,
        getUsdRubRate,
        isPaymentTypeLoaded,
        isPaymentMethodLoaded,
      }}
    >
      {children}
    </TopUpContext.Provider>
  );
}

TopUpProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTopUp = () => {
  return useContext(TopUpContext);
};

export { TopUpProvider, useTopUp };
