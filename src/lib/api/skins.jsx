import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import fetch from '../fetch';
import { useAuth } from './auth';
import swal from 'sweetalert2';

const SkinsContext = createContext({});

function SkinsProvider({ children }) {
  const { token, user } = useAuth();
  const [skins, setSkins] = useState([]);
  const [skinsCases, setSkinsCases] = useState([]);
  const [isSkinsLoaded, setIsSkinsLoaded] = useState(false);
  const [selectedSkins, setSelectedSkins] = useState({});
  const [selectedSkinCases, setSelectedSkinCases] = useState({});
  const [selectedSkinsPrice, setSelectedSkinsPrice] = useState(0);
  const [exchangeSkin, setExchangeSkin] = useState(null);

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
      setSelectedSkinCases({});
      setIsSkinsLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const skinToSteam = async () => {
    try {
      const data = {
        skin_id: Object.keys(selectedSkins),
      };

      const statuses = await fetch('/store/skin-to-steam', {
        method: 'GET',
        data,
      });

      for (const id of Object.keys(statuses)) {
        if (!statuses[id].success) {
          const skin = selectedSkins[id];
          await swal.fire(
            'Failed',
            `Не удалось вывести "${skin.name}"`,
            'error',
          );
        }
      }

      await getSkins();
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const openCaseStore = async skinCase => {
    const data = new FormData();

    data.append('case_inventory_id', skinCase.id);
    data.append('user_id', user.id);

    const response = await fetch('/cases/open', {
      method: 'POST',
      data,
    });

    return response.skin_id;
  };

  const selectSkin = (id, skin) => {
    if (selectedSkins[id]) {
      delete selectedSkins[id];
      setSelectedSkins({ ...selectedSkins });
    } else {
      setSelectedSkins({ ...selectedSkins, [id]: skin });
    }
  };

  const selectSkinCase = skinCase => {
    if (selectedSkinCases[skinCase.id]) {
      delete selectedSkinCases[skinCase.id];
      setSelectedSkinCases({ ...selectedSkinCases });
    } else {
      setSelectedSkinCases({ ...selectedSkinCases, [skinCase.id]: skinCase });
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
        skinToSteam,
        selectedSkinCases,
        selectSkinCase,
        openCaseStore,
        setSelectedSkinCases,
        exchangeSkin,
        setExchangeSkin,
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
