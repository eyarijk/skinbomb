import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Box } from '@material-ui/core';

import s from './styles.module.scss';

function WeaponCard({ card, small, selectCard, selectedCards, percent = 0 }) {
  return (
    <Box
      className={cn(s.root, { [s.small]: small })}
      borderRadius={10}
      bgcolor="#111"
      border={`${
        card && selectedCards[card.id]
          ? '1px solid #E83F48'
          : '1px solid #4a4a4a'
      }`}
      height="min-content"
      mt={small ? 1 : 3}
      width={118}
      style={{ cursor: 'pointer' }}
      position="relative"
      onClick={() => selectCard(card.id, card)}
    >
      <Box p={1.5}>
        <Box display="flex" alignItems="center">
          {card && card.is_star === 1 && (
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
            {card.name_of_weapon}
          </Box>
        </Box>
        <Box className={s.cover}>
          <img src={`https://api.skinbomb.gg${card.icon}`} alt={card.name} />
        </Box>
        <Box display="flex">
          {!card.wear_level && !card.is_souvenir && !card.is_statTrack && (
            <Box height="10px" />
          )}
          {!!card.wear_level && (
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
              mr={0.5}
            >
              {card.wear_level}
            </Box>
          )}
          {(!!card.is_souvenir || !!card.is_statTrack) && (
            <Box
              bgcolor={card.is_souvenir ? '#FADB35' : '#8842A8'}
              fontSize={7}
              fontWeight={600}
              borderRadius={2}
              height={10}
              px={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {!!card.is_souvenir && 'Souvenir'}
              {!!card.is_statTrack && 'StatTrack'}
            </Box>
          )}
        </Box>
        <Box
          color="#f2f2f2"
          fontSize={9}
          fontWeight={400}
          className={s.ellipsis}
        >
          {card.name}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          width={1}
          alignItems="center"
        >
          <Box color="#fff" fontSize={11} fontWeight={600}>
            {card.price.toFixed(2)} $
          </Box>
          {percent ? (
            <Box fontSize={10} color="#fff">
              {percent}%
            </Box>
          ) : (
            <Box />
          )}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" width={1}>
        <Box width={0.5} height={2.5} bgcolor={card.color} />
      </Box>
    </Box>
  );
}

WeaponCard.defaultProps = {
  small: false,
  selectCard: () => {},
  selectedCards: {},
};

WeaponCard.propTypes = {
  card: PropTypes.shape().isRequired,
  small: PropTypes.bool,
  selectCard: PropTypes.func,
  selectedCards: PropTypes.object,
  percent: PropTypes.number,
};

export default WeaponCard;
