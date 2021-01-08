import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Box } from '@material-ui/core';

import s from './styles.module.scss';

function CaseCard({ card, selectCard, selectedCards }) {
  return (
    <Box
      className={cn(s.root, s.small)}
      borderRadius={10}
      bgcolor="#111"
      border={`${
        selectedCards[card.id] ? '1px solid #F89D00' : '1px solid #4a4a4a'
      }`}
      height="min-content"
      mt={1}
      mr={1}
      width={118}
      style={{ cursor: 'pointer' }}
      position="relative"
      onClick={() => selectCard(card)}
    >
      <Box p={1.5}>
        <Box display="flex" alignItems="center">
          <Box
            color="#626262"
            fontSize={9}
            lineHeight="20px"
            letterSpacing="0.44px"
            fontWeight={600}
            className={s.ellipsis}
          >
            Кейс
          </Box>
        </Box>
        <Box className={s.cover}>
          <img src="/case-item.png" alt="Кейс" />
        </Box>
        <Box
          color="#f2f2f2"
          fontSize={9}
          fontWeight={400}
          marginTop="10px"
          className={s.ellipsis}
        >
          Уровень {card.case.level}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" width={1} marginTop="16px">
        <Box width={0.5} height={2.5} bgcolor="#F89D00" />
      </Box>
    </Box>
  );
}

CaseCard.defaultProps = {
  selectCard: () => {},
  selectedCards: {},
};

CaseCard.propTypes = {
  card: PropTypes.shape().isRequired,
  selectCard: PropTypes.func,
  selectedCards: PropTypes.object,
};

export default CaseCard;
