import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';

const ReferralsContext = createContext({});

function ReferralsProvider({ children }) {
  const { token } = useAuth();
  const [referrals, setReferrals] = useState(null);
  const [isReferralsLoaded, setIsReferralsLoaded] = useState(false);

  const getReferrals = async () => {
    try {
      const payload = await fetch('/referrals');

      setReferrals(payload.data);
      setIsReferralsLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  const createCode = async code => {
    const formData = new FormData();
    formData.append('code', code);
    try {
      const payload = await fetch('/referrals/code', {
        method: 'post',
        data: formData,
      });

      setReferrals(payload.data);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  const activateCode = async code => {
    const formData = new FormData();
    formData.append('code', code);
    try {
      const payload = await fetch('/referrals/code/activate', {
        method: 'post',
        data: formData,
      });

      setReferrals(payload.data);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  useEffect(() => {
    if (token && referrals === null) {
      getReferrals();
    }
  }, [token]);

  return (
    <ReferralsContext.Provider
      value={{
        isReferralsLoaded,
        referrals,
        getReferrals,
        createCode,
        activateCode,
      }}
    >
      {children}
    </ReferralsContext.Provider>
  );
}

ReferralsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useReferrals = () => {
  return useContext(ReferralsContext);
};

export { ReferralsProvider, useReferrals };
