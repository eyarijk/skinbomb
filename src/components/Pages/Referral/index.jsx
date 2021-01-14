import React, { useState, useEffect } from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Loading from '../../Loading';
import Button from '../../UiKit/Button';
import Input from '../../UiKit/Input';

import { useReferrals } from '../../../lib/api/referrals';

import s from './styles.module.scss';
import Copy from '../../Copy';

function Referral() {
  const theme = useTheme();

  const {
    referrals,
    isReferralsLoaded,
    createCode,
    activateCode,
    toBalance,
    isErrorCode,
  } = useReferrals();
  const [code, setCode] = useState('');
  const [newCode, setNewCode] = useState('');

  useEffect(() => {
    if (referrals) {
      setNewCode(referrals.code);
    }
  }, [referrals]);

  if (!isReferralsLoaded) {
    return <Loading />;
  }

  return (
    <div className={s.root}>
      <Box
        display="flex"
        fontSize={24}
        fontWeight={700}
        pt={{ xs: 2, sm: 9 }}
        color="#fff"
        mb={4}
        pl={6}
      >
        Рефералы
      </Box>
      <Box
        display="flex"
        width={1}
        pl={{ xs: 0, sm: 0.5 }}
        pr={{ xs: 0, sm: 4 }}
        mb={1.3}
        justifyContent={{ xs: 'space-between', sm: 'unset' }}
        // flexDirection={{ xs: 'column', sm: 'row' }}
        flexWrap={{ xs: 'wrap', sm: 'unset' }}
      >
        <Box
          borderRadius={10}
          mr={{ xs: 0, sm: 1.2 }}
          py={2}
          px={2}
          bgcolor={theme.background.primary}
          width={{ xs: 1, sm: 0.46 }}
          height={{ xs: 'auto', sm: 171 }}
          display="flex"
          flexDirection="column"
          mb={{ xs: 2.5, sm: 0 }}
        >
          <Box
            color="#fff"
            display="flex"
            alignItems="center"
            fontSize={16}
            fontWeight={700}
            mr={12}
            mb={3}
          >
            <img
              src="/star.svg"
              alt="star"
              style={{ marginRight: 8, width: 25 }}
            />
            {`Ранг ${referrals.rank}`}
          </Box>
          <Box flexDirection="column" justifyContent="space-between" pl={2}>
            <Box
              fontSize={14}
              fontWeight={400}
              width={0.98}
              color="#F5F5F5"
              mb={2}
            >
              Вы получаете 2% с пополнения ваших рефералов
            </Box>
            <Box
              width={0.98}
              borderRadius={10}
              height={16}
              bgcolor="#282828"
              position="relative"
              display="flex"
              justifyContent="space-between"
              mb={2}
            >
              <Box
                left={0}
                top={0}
                bottom={0}
                borderRadius={10}
                width={`${+referrals.percent_of_rank}%`}
                bgcolor="#FB9414"
              />
              <Box>
                {Array.from({ length: referrals.stars_count }, (v, i) => i).map(
                  (a, i) => (
                    <img
                      key={i}
                      src="/star.svg"
                      alt="star"
                      style={{ marginRight: 8, marginBottom: 2, width: 11 }}
                    />
                  ),
                )}
              </Box>
            </Box>
            <Box fontSize={14} fontWeight={400} color="#ABABAB">
              <b>{`${referrals.remainder.toFixed(2)} $`}</b> пополнений
              требуется к следующему рангу
            </Box>
          </Box>
        </Box>
        <Box
          borderRadius={10}
          py={2}
          pr={2}
          pl={4}
          mb={2}
          bgcolor={theme.background.primary}
          width={1}
          display={{ xs: 'flex', sm: 'none' }}
          flexDirection="column"
        >
          <Box
            color="#fff"
            display="flex"
            fontSize={14}
            pr={4}
            fontWeight={700}
            mb={2}
            fontFamily="Open Sans, sans-serif"
          >
            Введите реферальный код ниже и получите ваши бесплатные 0,50 $
          </Box>
          {isErrorCode && (
            <Box
              className={s.errorCode}
              fontSize={14}
              pr={4}
              fontWeight={700}
              mb={2}
              fontFamily="Open Sans, sans-serif"
            >
              Неверный код
            </Box>
          )}
          <Box
            display="flex"
            justifyContent="space-between"
            mb={2}
            fontSize={16}
            color="#F5F5F5"
          >
            <Input
              value={code}
              name="referralCode"
              onChange={val => setCode(val)}
              bgcolor="#070707"
              borderColor="#FB9414"
              borderSize="1px"
              h="40px"
              align="left"
              color="#F6AF25"
            />
            <Button
              borderSize="0px"
              variant={s.checkImg}
              value={<img src="/check.svg" alt="check" style={{ width: 20 }} />}
              bgcolor="#FB9414"
              color="#141415"
              w="41px"
              h="40px"
              m="0 0 0 20px"
              onClick={() => {
                activateCode(code);
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          width={{ xs: 170, sm: 0.19 }}
          mr={1.2}
          height={171}
          borderRadius={10}
          px={2}
          bgcolor={theme.background.primary}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            color="#fff"
            display="flex"
            alignItems="center"
            fontSize={24}
            fontWeight={700}
            mb={2}
          >
            0
          </Box>
          <Box
            color="#BABABA"
            display="flex"
            alignItems="center"
            fontSize={14}
            mb={2}
          >
            Рефералы
          </Box>
        </Box>
        <Box
          borderRadius={10}
          py={2}
          pr={2}
          pl={4}
          mb={2}
          bgcolor={theme.background.primary}
          width={{ xs: 170, sm: 0.35 }}
          height={171}
          display={{ xs: 'flex', sm: 'none' }}
          flexDirection="column"
          alignItems="center"
        >
          <Box color="#fff" display="flex" alignItems="center" mb={1}>
            <img
              src="/handWithCoins.svg"
              alt="hand_with_coins"
              style={{ marginRight: 8, width: 35 }}
            />
          </Box>
          <Box
            color="#fff"
            display="flex"
            alignItems="center"
            fontSize={24}
            fontWeight={700}
          >
            {`${referrals.amount} $`}
          </Box>
          <Box
            color="#BABABA"
            display="flex"
            alignItems="center"
            fontSize={14}
            mb={1}
          >
            Заработано
          </Box>
          <Button
            borderSize="0px"
            value="Забрать"
            bgcolor="#FB9414"
            w="105px"
            h="36px"
            onClick={() => {
              console.log('Забрать');
            }}
            fontFamily="Open Sans, sans-serif"
            fontSize={12}
            fontWeight={700}
            color="#141415"
          />
        </Box>
        <Box
          borderRadius={10}
          py={2}
          pr={2}
          pl={4}
          mb={2}
          bgcolor={theme.background.primary}
          width={{ xs: 170, sm: 0.35 }}
          height={171}
          display={{ xs: 'none', sm: 'flex' }}
          flexDirection="column"
        >
          <Box
            color="#fff"
            display="flex"
            fontSize={14}
            pr={4}
            fontWeight={700}
            mb={2}
            fontFamily="Open Sans, sans-serif"
          >
            Введите реферальный код ниже и получите ваши бесплатные 0,50 $
          </Box>
          {isErrorCode && (
            <Box
              className={s.errorCode}
              fontSize={14}
              pr={4}
              fontWeight={700}
              mb={2}
              fontFamily="Open Sans, sans-serif"
            >
              Неверный код
            </Box>
          )}
          <Box
            display="flex"
            justifyContent="space-between"
            mb={2}
            fontSize={16}
            color="#F5F5F5"
          >
            <Input
              value={code}
              name="referralCode"
              onChange={val => setCode(val)}
              bgcolor="#070707"
              borderColor="#4A4A4A"
              borderSize="1px"
              h="40px"
              align="left"
              color="#F6AF25"
            />
            <Button
              borderSize="0px"
              variant={s.checkImg}
              value={<img src="/check.svg" alt="check" style={{ width: 20 }} />}
              bgcolor="#FB9414"
              color="#141415"
              w="41px"
              h="40px"
              m="0 0 0 20px"
              onClick={() => {
                activateCode(code);
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        width={1}
        pl={{ xs: 0, sm: 0.5 }}
        pr={{ xs: 0, sm: 4 }}
        flexWrap={{ xs: 'wrap', sm: 'unset' }}
      >
        <Box
          borderRadius={10}
          mr={{ xs: 0, sm: 2 }}
          py={2}
          pr={2}
          pl={4}
          bgcolor={theme.background.primary}
          width={{ xs: 1, sm: 0.84 }}
          height={{ xs: 'unset', sm: 171 }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'unset' }}
        >
          <Box width={{ xs: 1, sm: 0.5 }} mr={{ xs: 0, sm: 2 }}>
            <Box
              color="#fff"
              display="flex"
              fontSize={16}
              fontWeight={700}
              mb={2}
              maxWidth={150}
            >
              Приглашайте своих друзей
            </Box>

            <Box color="#F5F5F5" display="flex" fontSize={14} mb={3}>
              Поделитесь своим кодом с друзьями или подписчиками, они получат
              бесплатные 0.50 $ а вы получите процент с каждого их пополнения!
            </Box>
          </Box>
          <Box width={{ xs: 1, sm: 0.5 }}>
            <Box height={1} flexDirection="column">
              <Box
                display="flex"
                justifyContent="space-between"
                mb={1}
                fontSize={14}
                color="#F5F5F5"
              >
                <Input
                  label="Ваш код:"
                  value={newCode}
                  name="referralTitle"
                  onChange={val => setNewCode(val)}
                  bgcolor="#070707"
                  borderColor="#4A4A4A"
                  fontSize={14}
                  borderSize="1px"
                  h="40px"
                  align="left"
                  color="#FFFFFF"
                  className={s.referralCode}
                />
                <Button
                  value={
                    <img src="/check.svg" alt="save" style={{ width: 20 }} />
                  }
                  variant={s.checkImg}
                  borderSize="0px"
                  bgcolor="#FB9414"
                  color="#141415"
                  w="41px"
                  h="40px"
                  m="28px 0 0 20px"
                  onClick={() => {
                    createCode(newCode);
                  }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
                fontSize="14px"
                color="#F5F5F5"
              >
                <Input
                  value={
                    referrals.url ? `https://skinbomb.gg/${referrals.url}` : ''
                  }
                  label="Ваша ссылка:"
                  name="referralLink"
                  onChange={() => {}}
                  bgcolor="#070707"
                  borderColor="#4A4A4A"
                  borderSize="1px"
                  fontSize="14px"
                  h="40px"
                  align="left"
                  color="#FFFFFF"
                />
                <Copy text={`https://skinbomb.gg/${referrals.url}`} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          borderRadius={10}
          py={2}
          px={2}
          bgcolor={theme.background.primary}
          width={0.16}
          height={171}
          display={{ xs: 'none', sm: 'flex' }}
          alignItems="center"
          flexDirection="column"
        >
          <Box color="#fff" display="flex" alignItems="center" mb={1}>
            <img
              src="/handWithCoins.svg"
              alt="hand_with_coins"
              style={{ marginRight: 8, width: 35 }}
            />
          </Box>
          <Box
            color="#fff"
            display="flex"
            alignItems="center"
            fontSize={24}
            fontWeight={700}
          >
            {`${referrals.amount} $`}
          </Box>
          <Box
            color="#BABABA"
            display="flex"
            alignItems="center"
            fontSize={14}
            mb={1}
          >
            Заработано
          </Box>
          <Button
            variant={s.btn}
            borderSize="0px"
            value="Забрать"
            bgcolor="#FB9414"
            color="#000"
            w="105px"
            h="36px"
            fontSize={16}
            fontWeight="bold"
            onClick={() => {
              toBalance();
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Referral;
