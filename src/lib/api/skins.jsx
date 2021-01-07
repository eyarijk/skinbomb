import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';
import { useRouter } from 'next/router';

const SkinsContext = createContext({});

function SkinsProvider({ children }) {
  const { token } = useAuth();
  const [skins, setSkins] = useState(null);
  const [isSkinsLoaded, setIsSkinsLoaded] = useState(false);
  const [exchangeProcess, setExchangeProcess] = useState(false);
  const [selectedSkins, setSelectedSkins] = useState({});
  const [selectedSkinsPrice, setSelectedSkinsPrice] = useState(0.0);
  const router = useRouter();

  useEffect(() => {
    let sum = 0;
    Object.values(selectedSkins).map(a => {
      if (a.price) sum += Number(a.price);
    });
    setSelectedSkinsPrice(sum.toFixed(2));
  }, [selectedSkins]);

  const enableExchangeProcess = () => {
    router.push('/store');
    setExchangeProcess(true);
  };

  const disableExchangeProcess = () => {
    setExchangeProcess(false);
  };

  const getSkins = async () => {
    try {
      const payload = await fetch('/skins/get');
      setSkins(payload.skin_history);
      setSelectedSkins({});
      setIsSkinsLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
      return;
    }
  };

  const selectSkin = (id, skin) => {
    if (selectedSkins[id]) {
      delete selectedSkins[id];
      setSelectedSkins({ ...selectedSkins });
    } else {
      setSelectedSkins({ ...selectedSkins, [id]: skin });
    }
  };

  useEffect(() => {
    if (token) {
      getSkins();
    }
  }, [token]);

  return (
    <SkinsContext.Provider
      value={{
        skins,
        getSkins,
        selectedSkins,
        setSelectedSkins,
        selectedSkinsPrice,
        selectSkin,
        exchangeProcess,
        enableExchangeProcess,
        disableExchangeProcess,
        isSkinsLoaded,
      }}
    >
      {children}
    </SkinsContext.Provider>
  );
}

SkinsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useSkins = () => {
  return useContext(SkinsContext);
};

export { SkinsProvider, useSkins };
