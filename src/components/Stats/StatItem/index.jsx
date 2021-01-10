import React from 'react';
import PropTypes from 'prop-types';

import { Box, Avatar } from '@material-ui/core';

import s from './styles.module.scss';

function StatItem({ item }) {
  function getItemColor() {
    switch (item.win) {
      case 'win':
        return '#02C880';
      case 'lose':
        return '#EB5757';
      default:
        return '#6361C8';
    }
  }

  function getStatusText() {
    switch (item.win) {
      case 'in_round':
        return (
          <Box fontSize={12} lineHeight="24px" fontWeight={400}>
            В РАУНДЕ
          </Box>
        );
      default:
        return (
          <Box fontSize={14} lineHeight="24px" fontWeight={600}>
            {`${item.amount.toFixed(2)} $`}
          </Box>
        );
    }
  }

  function getStatusCircle() {
    switch (item.win) {
      case 'lose':
        return <img src="/red.gif" alt="lose" style={{ height: 65 }} />;
      case 'in_round':
        return <img src="/violet.gif" alt="round" style={{ height: 65 }} />;
      default:
        return;
    }
  }

  const showSkins = [...item.skins]
    .sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount))
    .slice(0, 2);

  const addSkinsCount = item.skins?.length - 2;

  return (
    <Box
      width={1}
      height={70}
      border={`2px solid ${getItemColor()}`}
      borderRadius={10}
      mb={0.75}
      px={2.5}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="white"
      className={s.root}
      bgcolor="#141415"
    >
      <Box width={0.5} display="flex" alignItems="center">
        <Avatar className={s.avatarWrapper}>
          <Box
            style={{ backgroundImage: `url(${item.user.avatar})` }}
            className={s.avatar}
          />
        </Avatar>
        <Box
          display="flex"
          flexDirection="column"
          height={1}
          justifyContent="space-between"
          mx={2.5}
          color="#c4c4c4"
          fontWeight={400}
          fontFamily="Open Sans, sans-serif"
          fontSize={14}
        >
          <span>{item.user.personaname}</span>
          <Box
            component="span"
            color="#c4c4c4"
            fontWeight={600}
            fontFamily="Open Sans, sans-serif"
          >{`${item.current_user_amount.toFixed(2)} $`}</Box>
        </Box>
        {showSkins.map(gun => (
          <img
            key={gun.id}
            src={`https://api.skinbomb.gg/${gun.skin.icon}`}
            alt="gun"
            style={{ width: '90px' }}
          />
        ))}
        {addSkinsCount > 0 && <Box component="span"
          width={64}
          ml="15px"
          height={26}
          display="flex"
          alignItems="center"
          borderRadius="10px"
          justifyContent="center"
          style={{ backgroundColor: getItemColor() }}
        >+{addSkinsCount}</Box>}
      </Box>
      <Box
        width={0.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Box
            height={26}
            width={84}
            bgcolor={getItemColor()}
            borderRadius={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mr={3.5}
          >
            {getStatusText()}
          </Box>
          {item.win === 'win' &&
            (item.wanted_item ? (
              <div key={item.wanted_item.id} className={s.winGunWrapper}>
                <img
                  src={`https://api.skinbomb.gg/${item.wanted_item.icon}`}
                  alt="gun"
                  style={{ width: '90px' }}
                />
              </div>
            ) : (
              <>
                <Box
                  fontWeight={600}
                  fontSize={14}
                  lineHeight="20px"
                  color="#fff"
                  ml={5}
                >
                  {`${item.skins_after_win.toFixed(2)} $`}
                </Box>
                <Box ml={2}>
                  <img src="/up.svg" alt="up" />
                </Box>
              </>
            ))}
        </Box>
        {getStatusCircle()}
      </Box>
    </Box>
  );
}

StatItem.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default StatItem;
