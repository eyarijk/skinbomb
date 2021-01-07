import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Box, Button } from '@material-ui/core';

import UiButton from '../UiKit/Button';
import WeaponCard from '../WeaponCard';

import { useAuth } from '../../lib/api/auth';
import { useSkins } from '../../lib/api/skins';

import s from './styles.module.scss';

export default function Inventory() {
  const auth = useAuth();
  const {
    skins,
    getSkins,
    selectedSkins,
    selectSkin,
    setSelectedSkins,
    selectedSkinsPrice,
    exchangeProcess,
    enableExchangeProcess,
    disableExchangeProcess,
  } = useSkins();
  const [cards, setCards] = useState(skins);
  const [allCardsID] = useState({});
  function onLoginClick() {
    auth.steamAuth();
  }
  useEffect(() => {
    getSkins();
  }, []);

  useEffect(() => {
    setCards(skins);
    skins && skins.length && skins.map(el => (allCardsID[el.id] = el));
  }, [skins]);

  if (!auth.user) {
    return (
      <Box className={s.root} display="flex" alignItems="center" height="100%">
        <Box
          width={330}
          height={175}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box color="#C4C4C4">Войдите, чтобы начать играть</Box>
          <Button className={s.loginButton} onClick={onLoginClick}>
            <img src="login-steam.svg" alt="login" />
          </Button>
          <Box
            fontWeight="400"
            fontSize={14}
            lineHeight="20px"
            letterSpacing="0.44px"
            color="#C4C4C4"
          >
            Заходя на этот сайт, вы подтверждаете, что вам исполнилось 18 лет и
            вы соглашаетесь с{' '}
            <Link href="/privacy-policy">
              <span className={s.privacy}>
                Условиями пользовательского соглашения
              </span>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  }
  if (!skins || !skins.length) {
    return (
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width={1}
        height={1}
      >
        <Box
          textAlign="center"
          color="#C4C4C4"
          display="flex"
          fontSize={16}
          fontWeight={400}
          mb={2}
        >
          Ваш инвентарь пуст
        </Box>
        <Box
          color="#C4C4C4"
          display="flex"
          maxWidth={320}
          fontSize={14}
          fontWeight={400}
          mb={2}
        >
          1. Для начала вам нужно пополнить балланс, вы можете пополнить его,
          используя скины или деньги во вкладке Пополнить
        </Box>
        <Box
          color="#C4C4C4"
          display="flex"
          fontSize={14}
          fontWeight={400}
          mb={3}
          maxWidth={320}
        >
          2. Вы можете обменять деньги на скины в магазине
        </Box>
        <Box mb={3} display="flex" justifyContent="center">
          <Link href="/store">
            <UiButton
              value="Магазин"
              onClick={() => {}}
              w="150px"
              h="40px"
              bgcolor="#7D20FF"
              borderColor="#7D20FF"
            />
          </Link>
        </Box>
      </Box>
    );
  }
  return (
    <Box display="flex" flexDirection="column" width={1} height={'90%'}>
      <Box mb={3} display="flex" justifyContent="center">
        <Link href="/store">
          <UiButton
            value="Магазин скинов"
            onClick={() => {}}
            w="150px"
            h="40px"
            bgcolor="#F89D00"
            borderColor="#F89D00"
          />
        </Link>
      </Box>
      <Box
        flexGrow={1}
        height={1}
        width={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          maxHeight={1}
          overflow="hidden auto"
          mb={2}
          className={s.overflow}
        >
          {cards.map(card => (
            <WeaponCard
              key={card.id}
              card={card}
              small
              selectCard={selectSkin}
              selectedCards={selectedSkins}
            />
          ))}
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between" width={1}>
            <Box>
              <Box
                fontSize={10}
                fontWeight={400}
                color="#9292C1"
                lineHeight="20px"
              >
                Всего ({Object.keys(selectedSkins).length})
              </Box>
              <Box
                fontSize={14}
                fontWeight={600}
                color="#fff"
                lineHeight="20px"
              >
                {selectedSkinsPrice} $
              </Box>
            </Box>
            <UiButton
              value="Все"
              onClick={() => {
                if (
                  Object.keys(selectedSkins).length <
                  Object.keys(allCardsID).length
                )
                  setSelectedSkins({ ...selectedSkins, ...allCardsID });
                else setSelectedSkins({});
              }}
              variant={`${
                Object.keys(selectedSkins).length ===
                  Object.keys(allCardsID).length &&
                Object.keys(selectedSkins).length !== 0
                  ? 'contained'
                  : 'outlined'
              }`}
              borderSize="2px"
              borderColor="#6361C8"
              bgcolor="#6361C8"
              w={44}
              h={34}
            />
          </Box>
          {Object.keys(selectedSkins).length !== 0 && (
            <>
              {!exchangeProcess ? (
                <>
                  <Box color="#fff">Обмен</Box>
                  <Box display="flex" justifyContent="space-between" mt={3}>
                    <UiButton
                      value="Отмена"
                      onClick={disableExchangeProcess}
                      w="150px"
                      h="40px"
                      bgcolor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
                      borderColor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
                    />
                  </Box>
                </>
              ) : (
                <Box display="flex" justifyContent="space-between" mt={3}>
                  <UiButton
                    value="Обмен"
                    onClick={enableExchangeProcess}
                    w="150px"
                    h="40px"
                    bgcolor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
                    borderColor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
                  />
                  <UiButton
                    value="Вывести"
                    onClick={() => {}}
                    w="150px"
                    h="40px"
                    bgcolor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
                    borderColor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
                  />
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
