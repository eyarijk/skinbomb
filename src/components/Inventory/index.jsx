import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button } from '@material-ui/core';
import UiButton from '../UiKit/Button';
import WeaponCard from '../WeaponCard';
import CaseCard from '../CaseCard';
import CaseOpen from '../CaseOpen';
import { useAuth } from '../../lib/api/auth';
import { useSkins } from '../../lib/api/skins';
import s from './styles.module.scss';

export default function Inventory() {
  const auth = useAuth();
  const {
    skins,
    skinsCases,
    getSkins,
    selectedSkins,
    selectSkin,
    setSelectedSkins,
    setSelectedSkinCases,
    selectSkinCase,
    selectedSkinCases,
    selectedSkinsPrice,
    skinToSteam,
    openCaseStore,
  } = useSkins();

  const [cards, setCards] = useState(skins);
  const [activeCase, setActiveCase] = useState(null);

  function onLoginClick() {
    auth.steamAuth();
  }

  useEffect(() => {
    getSkins();
  }, []);

  useEffect(() => {
    setCards(skins);
  }, [skins]);

  const openCase = () => {
    const [skinCase] = Object.values(selectedSkinCases);

    setActiveCase(skinCase);
  };

  const onOpenedCase = () => {
    getSkins();
    setActiveCase(null);
    setSelectedSkinCases({});
  };

  const renderNav = () => {
    const countSelectedSkins = Object.keys(selectedSkins).length;
    const countSelectedSkinCases = Object.keys(selectedSkinCases).length;

    if (countSelectedSkins === 0 && countSelectedSkinCases === 0) {
      return '';
    }

    return (
      <>
        {countSelectedSkinCases > 0 && (
          <Box display="flex" justifyContent="center" mt={3}>
            <UiButton
              value="Открыть"
              onClick={() => openCase()}
              w="150px"
              h="40px"
              bgcolor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
              borderColor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
            />
          </Box>
        )}
        {countSelectedSkins > 0 && (
          <Box display="flex" justifyContent="space-between" mt={3}>
            <UiButton
              value="Обмен"
              onClick={() => {}}
              w="90px"
              h="40px"
              bgcolor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
              borderColor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
            />
            <UiButton
              value="Вывести"
              onClick={() => skinToSteam()}
              w="90px"
              h="40px"
              bgcolor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
              borderColor="linear-gradient(139.23deg, #6361C8 13.34%, #713AEB 86.08%)"
            />
          </Box>
        )}
      </>
    );
  };

  const renderAllBtn = () => {
    const chooseAll = () => {
      if (Object.keys(selectedSkins).length === skins.length) {
        setSelectedSkins({});
      } else {
        const all = skins.reduce((items, card) => {
          items[card.id] = { ...card.skin, id: card.id };

          return items;
        }, {});

        setSelectedSkins(all);
      }
    };

    return (
      <UiButton
        value="Все"
        onClick={chooseAll}
        variant={`${
          Object.keys(selectedSkins).length === cards.length
            ? 'contained'
            : 'outlined'
        }`}
        borderSize="2px"
        borderColor="#6361C8"
        bgcolor="#6361C8"
        w={44}
        h={34}
      />
    );
  };

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
            <img src="/login-steam.svg" alt="login" />
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
    <>
      {activeCase && (
        <CaseOpen
          card={activeCase}
          openCase={openCaseStore}
          onOpened={onOpenedCase}
        />
      )}
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
            {skinsCases.map(skinsCase => (
              <CaseCard
                key={skinsCase.id}
                card={skinsCase}
                small
                selectCard={selectSkinCase}
                selectedCards={selectedSkinCases}
              />
            ))}
            {cards.map(card => (
              <WeaponCard
                key={card.id}
                card={{ ...card.skin, id: card.id }}
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
                  {selectedSkinsPrice.toFixed(2)} $
                </Box>
              </Box>
              {renderAllBtn()}
            </Box>
            {renderNav()}
          </Box>
        </Box>
      </Box>
    </>
  );
}
