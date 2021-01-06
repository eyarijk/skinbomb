import React, { useState, useEffect } from 'react';

import {Box, Button as MuiButton} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Button from '../../UiKit/Button';
import Input from '../../UiKit/Input';

import fetch from '../../../lib/fetch';

import s from './styles.module.scss';
import {useTopUp} from "../../../lib/api/top-up";
import cn from "classnames";
import * as swal from "sweetalert2";
import {useAuth} from "../../../lib/api/auth";
import Link from "next/link";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const buttons = ['1', '5', '10', '25', '50', '100'];

function round (num){
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function TopUp() {
  const theme = useTheme();
  const desk = useMediaQuery('(max-width: 1459px)');
  const mobileOrTablet = useMediaQuery('(max-width: 959px)');
  const mobile = useMediaQuery('(max-width: 767px)');
  const [currentMethod, setCurrentMethod] = useState(null);
  const {paymentTypes, isPaymentTypeLoaded, paymentMethods, getPaymentMethods, usdRubRate} = useTopUp();
  const [sum, setSum] = useState('');
  const [gameValut, setGameValut] = useState('');
  const [refCode, setRefCode] = useState('');
  const [tab, setTab] = useState("0");

  useEffect(() => {
    if(!!currentMethod && currentMethod.is_skins)
      submit();
  }, [currentMethod])

  useEffect(() => {
    getPaymentMethods(tab);
  }, [tab]);

  async function submit(){
    let fetchData = null;
    if(currentMethod.is_skins){
      try {
        fetchData = await fetch(currentMethod.url.replace('/api', ''));
      } catch (error){
        swal.fire('Failed', error.response.data.message, 'error');

        return;
      }
    }else{
      if(gameValut == '' || gameValut == 0 ){
        return;
      }
      const fd = new FormData();
      fd.append('amount', gameValut);
      try {
        fetchData = await fetch(currentMethod.url.replace('/api', ''), {method: 'POST', data: fd});
      } catch (error){
        swal.fire('Failed', error.response.data.message, 'error');

        return;
      }
    }

    if(!!fetchData && (fetchData.status === 'success' || fetchData.success))
      window.location.replace(fetchData.url);

  }

  function handleChangeSum(rub){
    console.log('aaa', rub)
    if (parseInt(rub, 10) || rub === ''){
      setSum(rub);
      setGameValut(rub === '' ? rub : round(rub * usdRubRate));
    }
  }

  function handleChangeValut(usd){
    if (parseInt(usd, 10) || usd === '') {
      setGameValut(usd);
      setSum(usd === '' ? usd : round(usd / usdRubRate));
    }
  }

  return (
    <Box
      py={{ xs: 1, sm: 2 }}
      px={{ xs: 0, sm: 1 }}
      display="flex"
      flexDirection={mobile ? "column" : "row"}
      justifyContent="space-between"
      className={s.overflow}
      width={(mobileOrTablet && "100vw") || (desk && "calc(100vw - 300px)") || "calc(100vw - 430px)"}
    >
      <Box
        pr={{ xs: 0, sm: 1 }}
        pb={2}
        width={mobile ? "100vw" : 'calc(100% - 320px)'}
        height="fit-content"
      >
        <Box
          component="h1"
          fontSize={24}
          fontWeight={900}
          lineHeight="36px"
          px={4.5}
          color="#fff"
          mb={{ xs: 3, sm: 4 }}
        >
          Пополнить
        </Box>
        <Box
          width={1}
          bgcolor={theme.background.primary}
          borderRadius={10}
          px={2.5}
          pb={{ xs: 2.5, sm: 0 }}
        >
          <Box
            display="flex"
            justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
          >
            {!!isPaymentTypeLoaded && Object.keys(paymentTypes).map(key => (
              <Box
                key={key}
                  height={57}
                  color={tab === key ? '#fff' : '#737AAE'}
                  display="inline-flex"
                  justifyContent="center"
                  alignItems="center"
                  width="fit-content"
                  mr={{ xs: 0, sm: 5 }}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setTab(key)}
                >
                  {paymentTypes[key]}
                </Box>
              ))}
          </Box>
          <Box display="flex" maxWidth={1} flexWrap="wrap">
            {paymentMethods.map(method => (
              <Box
                  key={method.name}
                  m={{ xs: 0.6, sm: 1 }}
                  onClick={async () => {
                    setCurrentMethod(method);
                  }}
                  className={cn(s.methodCard, {
                    [s.active]: (!!currentMethod && currentMethod.id === method.id),
                  })}
              >
                {method.is_skins && <Box className={s.skin}>Скины</Box>}
                <img src={`https://api.skinbomb.gg${(!!currentMethod && currentMethod.id === method.id) ? method.logo_active : method.logo}`}/>
              </Box>
            ))}
          </Box>
          <Box>
            {currentMethod !== null && !currentMethod.is_skins && (
              <Box
                minWidth={1}
                display="flex"
                flexDirection="column"
                py={4}
                bgcolor={theme.background.primary}
                borderRadius={10}
              >
                <Box
                  display="flex"
                  width={1}
                  alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    width={{ xs: 250, sm: 0.45 }}
                    mb={{ xs: 2.5, sm: 0 }}
                  >
                    <Input
                      name="sum"
                      value={sum}
                      onChange={handleChangeSum}
                      h="50px"
                      label="Введите сумму пополнения:"
                      borderColor="#4A4A4A"
                      addon="RUB"
                    />
                  </Box>
                  <Box
                    height={40}
                    width={{ xs: 250, sm: 'unset' }}
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <img src="/change.svg" alt="change" />
                  </Box>
                  <Box
                    display="flex"
                    width={{ xs: 250, sm: 0.45 }}
                    alignItems="center"
                  >
                    <Input
                      name="gameValut"
                      value={gameValut}
                      onChange={handleChangeValut}
                      h="50px"
                      label="Вы получите:"
                      borderColor="#4A4A4A"
                      addon="USD"
                    />
                  </Box>
                </Box>
                <Box
                  my={{ xs: 2.5, sm: 5 }}
                  display="flex"
                  className={s.buttonsWrapper}
                >
                  {buttons.map(i => (
                    <Button
                      key={i}
                      value={`${i} $`}
                      onClick={() => handleChangeValut(i)}
                      variant="outlined"
                      h="34px"
                      borderColor="#7D20FF"
                      color="#9292C1"
                      p={0.5}
                      m="0 10px 0 0"
                      minWidth="44px"
                      borderSize="1.5px"
                      fontSize={14}
                      fontWeight={400}
                    />
                  ))}
                </Box>
                <Box
                  color="#898989"
                  fontSize={14}
                  fontWeight={400}
                  lineHeight="20px"
                  mb={3.5}
                >
                  Из-за особенностей сайта возвраты могут быть предоставлены
                  только в том случае, если вы не начинали тратить внесенные
                  вами средства.
                </Box>
                <Box display="flex" w="1" justifyContent="center">
                  <Button
                    bgcolor="linear-gradient(139.23deg, #02C880 13.34%, #01AB6E 86.08%)"
                    value="Подтвердить"
                    onClick={() => submit()}
                    borderSize="0"
                    w="140px"
                    h="40px"
                    fontWeight={700}
                    fontSize={16}
                    fontFamily="Open Sans, sans-serif"
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          fontSize={24}
          fontWeight={900}
          lineHeight="36px"
          px={4.5}
          color="#fff"
          mb={4}
          mt={2}
        >
          Бонус
        </Box>
        <Box
          width={mobile ? 1 : "320px"}
          height={170}
          bgcolor={theme.background.primary}
          borderRadius={10}
          p={3}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            color="#F5F5F5"
            fontSize={14}
            pr={4}
            fontWeight={700}
            mb={3}
            fontFamily="Open Sans, sans-serif"
          >
            Введите реферальный код ниже и получите ваши бесплатные 0,50 $
          </Box>
          <Box ml={1} width={1} display="flex" justifyContent={!mobile && "space-between"}>
            <Box width={240} mr={mobile && 3}>
              <Input
                value={refCode}
                onChange={val => setRefCode(val)}
                h="40px"
                borderColor="#4A4A4A"
              />
            </Box>
            <Button
              h="40px"
              w="40px"
              borderSize="0"
              bgcolor="#FB9414"
              onClick={() => {}}
              value={<img src="/check.svg" alt="check" />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopUp;
