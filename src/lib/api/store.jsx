import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';
import swal from 'sweetalert2';
import { useRouter } from 'next/router';

const StoreContext = createContext({});

const initialSearchOptions = {
  q: '',
  rarity_id: 0,
  type_id: 0,
  wear_level_id: 0,
  price_min: 0,
  scrolling: false,
  price_max: 0,
};

function StoreProvider({ children }) {
  const router = useRouter();

  const { token } = useAuth();
  const [cards, setCards] = useState([]);
  const [rarityDataOptions, setRarityDataOptions] = useState([]);
  const [qualityDataOptions, setQualityDataOptions] = useState([]);
  const [maxFilterPrice, setMaxFilterPrice] = useState([]);
  const [buyingSkins, setBuyingSkins] = useState({});
  const [buyingSkinsPrice, setBuyingSkinsPrice] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [buyingProcess, setBuyingProcess] = useState(false);
  const [typeDataOptions, setTypeDataOptions] = useState([]);
  const [isStoreLoaded, setIsStoreLoaded] = useState(true);
  const [typeExchange, setTypeExchange] = useState(null);
  const [lastSearchOptions, setLastSearchOptions] = useState(
    initialSearchOptions,
  );
  useEffect(() => {
    let sum = 0;
    Object.values(buyingSkins).map(a => {
      if (a.price) sum += Number(a.price);
    });
    setBuyingSkinsPrice(sum.toFixed(2));
  }, [buyingSkins]);

  const selectBuyingSkin = (id, skin) => {
    if (buyingSkins[id]) {
      delete buyingSkins[id];
      setBuyingSkins({ ...buyingSkins });
    } else if (typeExchange === 'game') {
      setBuyingSkins({ [id]: skin });
    } else {
      setBuyingSkins({ ...buyingSkins, [id]: skin });
    }
  };

  const handleSearch = async (options = initialSearchOptions) => {
    const opt = { ...initialSearchOptions, ...options };
    setLastSearchOptions({ ...opt });
    const { scrolling } = opt;

    try {
      if (isStoreLoaded) {
        if (!scrolling) {
          await fetchData([], opt);
        } else if (hasNextPage) {
          await fetchData(cards, opt);
        }
      }
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const fetchData = async (cards, options) => {
    const {
      q,
      rarity_id,
      type_id,
      wear_level_id,
      price_min,
      price_max,
    } = options;

    setIsStoreLoaded(false);

    let searchUrl = `/store/${cards.length}?`;

    if (q.trim() !== '') {
      searchUrl += `search=${q}`;
    }

    if (rarity_id && rarity_id !== 0) {
      searchUrl += `&rarity_id=${rarity_id}`;
    }

    if (type_id && type_id != 0) {
      searchUrl += `&type_id=${type_id}`;
    }

    if (wear_level_id && wear_level_id != 0) {
      searchUrl += `&wear_level_id=${wear_level_id}`;
    }

    searchUrl += `&price_min=${price_min}&price_max=${price_max}`;

    const payload = await fetch(searchUrl);
    setCards([...cards, ...payload.data]);
    setHasNextPage(payload.data.length > 0);
    setIsStoreLoaded(true);
    setBuyingSkins({});
  };

  const getOptions = async () => {
    try {
      const payload = await fetch('/store/filters');
      setRarityDataOptions(payload.data.rarities);
      setQualityDataOptions(payload.data.wear_levels);
      setTypeDataOptions(payload.data.types);
      setMaxFilterPrice(payload.data.max_price);
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const handleBuy = async () => {
    if (!buyingProcess) {
      setBuyingProcess(true);
      try {
        const formData = new FormData();
        Object.keys(buyingSkins).forEach(id => {
          formData.append('skin_ids[]', id);
        });
        const response = await fetch(`/store/buy`, {
          method: 'POST',
          data: formData,
        });

        handleSearch(lastSearchOptions);

        if (
          response &&
          response.errorMessages &&
          response.errorMessages.length > 0
        ) {
          let html = '';
          response.errorMessages.forEach(message => {
            html += `<p>${message}</p>`;
          });
          await swal.fire('Info', html, 'info');
        } else {
          await swal.fire('Success', 'Success', 'success');
        }

        setBuyingProcess(false);
      } catch (error) {
        await swal.fire('Failed', error.response.data.message, 'error');
        setBuyingProcess(false);
      }
    } else {
      swal.fire('Failed', 'You already have buying in process', 'error');
      setBuyingProcess(false);
    }
  };

  const handleExchange = async skinHistoryIds => {
    try {
      const formData = new FormData();

      Object.keys(buyingSkins).forEach(id => {
        formData.append('skin_ids[]', id);
      });

      skinHistoryIds.forEach(id => {
        formData.append('exchange_skin_history_ids[]', id);
      });

      await fetch(`/store/exchange`, {
        method: 'POST',
        data: formData,
      });

      await swal.fire('Success', 'Success', 'success');
    } catch (error) {
      await swal.fire('Failed', error.response.data.message, 'error');
    }
  };

  useEffect(() => {
    if (token) {
      getOptions();
      handleSearch();
    }
  }, [token]);

  return (
    <StoreContext.Provider
      value={{
        cards,
        qualityDataOptions,
        typeDataOptions,
        rarityDataOptions,
        maxFilterPrice,
        hasNextPage,
        buyingProcess,
        handleSearch,
        getOptions,
        handleBuy,
        buyingSkins,
        selectBuyingSkin,
        isStoreLoaded,
        buyingSkinsPrice,
        typeExchange,
        router,
        handleExchange,
        setTypeExchange,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStore = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStore };
