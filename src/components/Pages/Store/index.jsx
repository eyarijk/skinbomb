import React, { useState } from 'react';

import { Box, Slider } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Input from '../../UiKit/Input';
import Select from '../../UiKit/Select';
import Button from '../../UiKit/Button';
import WeaponCard from '../../WeaponCard';

import s from './styles.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStore } from '../../../lib/api/store';
import Loading from '../../Loading';
import { useSkins } from '../../../lib/api/skins';
import { useAuth } from '../../../lib/api/auth';
import { setCurrentExchange } from '../../../utils/LocalStorage';

const rarityData = {
  title: 'Раритетнось',
  placeholder: 'Все раритетноси',
};

const qualityData = {
  title: 'Качество',
  placeholder: 'Все качества',
};

const typeData = {
  title: 'Тип',
  placeholder: 'Все типы',
};

function Store() {
  const theme = useTheme();
  const isDesk = useMediaQuery('(max-width: 1459px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');

  const {
    qualityDataOptions,
    rarityDataOptions,
    typeDataOptions,
    handleSearch,
    isStoreLoaded,
    hasNextPage,
    cards,
    buyingProcess,
    handleBuy,
    buyingSkins,
    selectBuyingSkin,
    maxFilterPrice,
    buyingSkinsPrice,
    typeExchange,
    router,
  } = useStore();

  const { getSkins } = useSkins();
  const { fetchUser } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [sliderValue, setSliderValue] = useState([
    0,
    Math.ceil(maxFilterPrice),
  ]);
  const [rarity, setRarity] = useState(null);
  const [quality, setQuality] = useState(null);
  const [type, setType] = useState(null);

  function handleMinChange(val) {
    setSliderValue([val, sliderValue[1]]);
  }

  function handleMaxChange(val) {
    setSliderValue([sliderValue[0], val]);
  }

  async function fetchItems(scrolling = false) {
    const options = {
      q: search,
      rarity_id: rarity?.id,
      type_id: type?.id,
      wear_level_id: quality?.id,
      price_min: sliderValue[0],
      price_max: sliderValue[1],
      scrolling: scrolling,
    };
    handleSearch(options);
  }

  if (buyingProcess) {
    return <Loading />;
  }

  const renderFilterButton = () => {
    if (Object.keys(buyingSkins).length > 0) {
      const handleSubmit = async () => {
        if (typeExchange === 'exchange') {
          const [skin] = Object.values(buyingSkins);
          setCurrentExchange(skin);
          router.push('/');
          return;
        }

        await handleBuy();
        await getSkins();
        await fetchUser();
      };
      return (
        <Button
          value={`${
            typeExchange === 'exchange' ? 'Обменять' : 'Купить'
          } ${buyingSkinsPrice} $`}
          onClick={handleSubmit}
          w="100%"
          h="35px"
          borderSize="0"
          m="20px 0"
          bgcolor="linear-gradient(139.23deg, #02C880 13.34%, #01AB6E 86.08%)"
          fontFamily="Open Sans, sans-serif"
          fontSize="14px"
          fontWeight="700"
        />
      );
    }

    return (
      <Button
        value="Подтвердить поиск"
        onClick={() => fetchItems()}
        w="100%"
        h="35px"
        borderSize="0"
        m="20px 0"
        bgcolor="linear-gradient(139.23deg, #02C880 13.34%, #01AB6E 86.08%)"
        fontFamily="Open Sans, sans-serif"
        fontSize="14px"
        fontWeight="700"
      />
    );
  };

  return (
    <Box
      display="flex"
      height={1}
      pt={isMobileOrTablet ? 2 : 6}
      pl={1}
      width={
        (isMobileOrTablet && '100vw') ||
        (isDesk && 'calc(100vw - 300px)') ||
        'calc(100vw - 430px)'
      }
      pr={!isMobileOrTablet && 2}
    >
      <Box
        display="flex"
        flexDirection="column"
        width={1}
        mr={!isMobileOrTablet && 2}
      >
        <Box
          pr={!isMobileOrTablet && 2.5}
          display={isMobileOrTablet && 'flex'}
          alignItems="center"
          px={isMobileOrTablet && 2.5}
        >
          {isMobileOrTablet && (
            <Box width={40} height={40} onClick={() => setIsOpen(!isOpen)}>
              <img src="/fil.svg" alt="filIcon" />
            </Box>
          )}
          <Box
            py={2}
            px={2.5}
            bgcolor={!isMobileOrTablet && theme.background.primary}
            borderRadius={10}
            width={1}
            className={isMobileOrTablet && s.search}
          >
            {isMobileOrTablet && (
              <Box className={s.icon}>
                <div>
                  <img src="/search.svg" aly="search" />
                </div>
              </Box>
            )}
            <Input
              name="search"
              value={search}
              onChange={setSearch}
              placeholder="Введите название"
              borderColor="#4a4a4a"
              borderSize="1px"
              h={isMobileOrTablet ? '40px' : '38px'}
              align="left"
              bgcolor={isMobileOrTablet ? '#000' : '#141415'}
            />
          </Box>
        </Box>
        <Box
          height={1}
          bgcolor={theme.background.secondary}
          borderRadius="0 10px 0 0"
          className={s.resultsContainer}
          id="scroller"
        >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {cards.map(card => (
              <WeaponCard
                selectCard={selectBuyingSkin}
                selectedCards={buyingSkins}
                key={card.id}
                card={card}
              />
            ))}
          </Box>
          {!!hasNextPage && !!isStoreLoaded && (
            <Box
              className={s.txt}
              textAlign="center"
              my={2}
              onClick={() => fetchItems(true)}
            >
              Загрузить еще
            </Box>
          )}
          {!isStoreLoaded && (
            <Box className={s.txt} textAlign="center" my={2}>
              Загрузка...
            </Box>
          )}
        </Box>
      </Box>
      {(!isMobileOrTablet || isOpen) && (
        <Box
          minWidth={262}
          height={!isMobileOrTablet ? 1 : 900}
          bgcolor={theme.background.primary}
          p={2}
          className={s.rightContainer}
        >
          <Box display="flex" justifyContent="space-between" width={1} mb={4}>
            <Box>
              <Input
                value={sliderValue[0]}
                onChange={handleMinChange}
                name="minPrice"
                bgcolor="#282828"
                borderSize="0"
                w="105px"
                h="38px"
                align="left"
              />
            </Box>
            <Box>
              <Input
                value={sliderValue[1]}
                onChange={handleMaxChange}
                name="maxPrice"
                bgcolor="#282828"
                borderSize="0"
                w="105px"
                h="38px"
                align="left"
              />
            </Box>
          </Box>
          <Box minWidth={1} mb={3.5}>
            <Slider
              value={sliderValue}
              onChange={(_, val) => setSliderValue(val)}
              aria-labelledby="range-slider"
              min={0}
              max={Math.ceil(maxFilterPrice)}
              step={Math.ceil(maxFilterPrice / 20)}
              thumb={{
                color: 'red',
              }}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              minWidth={1}
              color="#A3A3A3"
            >
              <span>0</span>
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <span>{Math.ceil(maxFilterPrice / 2)}</span>
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <Box bgcolor="#A3A3A3" height="4px" minWidth="2px" width="2px" />
              <span>{Math.ceil(maxFilterPrice)}</span>
            </Box>
          </Box>
          <Box mb={2}>
            <Select
              name="rarity-select"
              value={rarity}
              onChange={setRarity}
              options={rarityDataOptions.map(item => ({
                id: item.id,
                label: item.name,
              }))}
              title={rarityData.title}
              placeholder={rarityData.placeholder}
              withPlaceholderOption
            />
          </Box>
          <Box mb={2}>
            <Select
              name="quality-select"
              value={quality}
              onChange={setQuality}
              options={qualityDataOptions.map(item => ({
                id: item.id,
                label: item.name,
              }))}
              title={qualityData.title}
              placeholder={qualityData.placeholder}
              withPlaceholderOption
            />
          </Box>
          <Box>
            <Select
              name="type-select"
              value={type}
              onChange={setType}
              options={typeDataOptions.map(item => ({
                id: item.id,
                label: item.name,
              }))}
              title={typeData.title}
              placeholder={typeData.placeholder}
              withPlaceholderOption
            />
          </Box>
          <Box width={1}>{renderFilterButton()}</Box>
        </Box>
      )}
    </Box>
  );
}

export default Store;
