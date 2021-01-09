import { Box } from '@material-ui/core';
import s from '../styles.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useSkins } from '../../../../lib/api/skins';
import PropTypes from 'react';
import {
  getCurrentExchange,
  removeCurrentExchange,
} from '../../../../utils/LocalStorage';

function ExchangeSkin({ handleChangeRate }) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');
  const isXsDesktop = useMediaQuery('(max-width: 1129px)');
  const [exchangeSkin, setExchangeSkin] = useState(null);
  const { selectedSkinsPrice } = useSkins();

  useEffect(() => {
    if (exchangeSkin && selectedSkinsPrice > 0) {
      handleChangeRate((exchangeSkin.price / selectedSkinsPrice).toFixed(2));
    } else {
      handleChangeRate(1.5);
    }
  }, [exchangeSkin, selectedSkinsPrice]);

  useEffect(() => {
    setExchangeSkin(getCurrentExchange());
  }, []);

  const cancelSkin = () => {
    removeCurrentExchange();
    setExchangeSkin(null);
  };

  const renderSkin = () => {
    if (!exchangeSkin) {
      return (
        <Link href="/store?type=game">
          <Box
            className={cn(s.button, s.shop)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={isMobileOrTablet ? 10 : 13}
          >
            {isMobileOrTablet ? 'Выбрать скин' : 'Выбрать скин в магазине'}
          </Box>
        </Link>
      );
    }

    return (
      <Box width="100%">
        <Box display="flex" alignItems="center">
          {!exchangeSkin?.is_star === 1 && (
            <img className={s.star} src="/star.svg" alt="star" />
          )}
          <Box
            color="#626262"
            fontSize={9}
            lineHeight="20px"
            letterSpacing="0.44px"
            fontWeight={600}
            className={s.ellipsis}
          >
            {exchangeSkin.name_of_weapon}
          </Box>
          {!!exchangeSkin.wear_level && (
            <Box
              bgcolor="#fff"
              fontSize={7}
              fontWeight={600}
              borderRadius={2}
              width={14}
              height={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx={0.5}
            >
              {exchangeSkin.wear_level}
            </Box>
          )}
          {(!!exchangeSkin.is_souvenir || !!exchangeSkin.is_statTrack) && (
            <Box
              bgcolor={exchangeSkin.is_souvenir ? '#FADB35' : '#8842A8'}
              fontSize={7}
              fontWeight={600}
              borderRadius={2}
              height={10}
              width={70}
              color={'#fff'}
              px={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx={0.5}
            >
              {!exchangeSkin.is_souvenir && 'Souvenir'}
              {!!exchangeSkin.is_statTrack && 'StatTrack'}
            </Box>
          )}
          <Box color="#fff" fontSize={13} fontWeight={500} ml="auto">
            {exchangeSkin.price.toFixed(2)} $
          </Box>
        </Box>
        <Box
          color="#f2f2f2"
          fontSize={11}
          fontWeight={400}
          className={s.ellipsis}
        >
          {exchangeSkin.name}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      height={(isMobileOrTablet && 185) || '100%'}
      width={(isMobileOrTablet && 299) || (isXsDesktop && 250) || 299}
      bgcolor={theme.background.primary}
      borderRadius={!isMobileOrTablet && 10}
      padding={isMobileOrTablet ? 0 : '40px 40px 20px 40px'}
      pl={isMobileOrTablet ? "36px" : 0}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      position={isMobileOrTablet ? 'inherit' : 'relative'}
    >
      {!!exchangeSkin && (
        <button onClick={cancelSkin} className={s.cancelEgg}>
          x
        </button>
      )}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={isMobileOrTablet ? 85 : 0.9}
        height={isMobileOrTablet ? 90 : 240}
        className={s.eggWrapper}
      >
        {!!exchangeSkin && (
          <img
            src={`https://api.skinbomb.gg${exchangeSkin.icon}`}
            alt="gloves"
            className={s.winWeapon}
          />
        )}
        <img
          src={exchangeSkin ? '/sphere.gif' : '/sphere.png'}
          alt="sphere"
          className={s.sphere}
        />
      </Box>
      {renderSkin()}
    </Box>
  );
}

ExchangeSkin.propTypes = {
  handleChangeRate: PropTypes.func,
};

export default ExchangeSkin;