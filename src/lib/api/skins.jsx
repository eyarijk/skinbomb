import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import fetch from '../fetch';
import { useAuth } from './auth';

const SkinsContext = createContext({});

function SkinsProvider({ children }) {
  const { token } = useAuth();
  const [skins, setSkins] = useState([]);
  const [skinsCases, setSkinsCases] = useState([]);
  const [isSkinsLoaded, setIsSkinsLoaded] = useState(false);
  const [selectedSkins, setSelectedSkins] = useState({});
  const [selectedSkinsPrice, setSelectedSkinsPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    Object.values(selectedSkins).map(a => {
      if (a.price) sum += Number(a.price);
    });

    setSelectedSkinsPrice(sum);
  }, [selectedSkins]);

  const getSkins = async () => {
    try {
      const payload = await fetch('/skins/get');
      setSkins(payload.skin_history);
      setSkinsCases(payload.inventory_cases);
      setSelectedSkins({});
      setIsSkinsLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
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
        skinsCases,
        getSkins,
        selectedSkins,
        setSelectedSkins,
        selectedSkinsPrice,
        selectSkin,
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
