import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

import Button from '../../UiKit/Button';
import Table from '../../UiKit/Table';

import fetch from '../../../lib/fetch';

import s from './styles.module.scss';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const upgraderText = {
  firstSentence:
    'Эта страница объясняет, как работает наша система доказательства честности, как определяются результаты игр и как вы можете их проверить.',
  secondSentence:
    'В начале каждого дня мы используем random.org чтобы сгенерировать новый секрет дня, после этого присоединяем к нему серийный номер и номер раунда, этот номер начинается с 1 и растет на единицу в каждом новом раунде, эти два значения определяют точку разрушения для раунда. Для секрета дня, который используется, мы показываем его хэш, так что вы имеете возможность проверить его.',
  thirdSentence:
    'Обратите внимание, что время на сервере может отличаться от вашего времени.',
  fourthSentence:
    'При таком подходе мы не имеем абсолютно никакого контроля над результатами игры, секрет дня создается сторонним сайтом random.org, к которому мы не имеем никакого отношения, серийный номер мы получаем от random.org, он увеличивается на единицу с каждым запросом и служит доказательством того, что мы не делаем несколько запросов в random.org, чтобы получить благоприятный результат, а номер раунда — это число, которое увеличивается на единицу с каждым раундом. Сайт не может изменить исход по мере ставок, поскольку результаты предопределены.',
  fifthSentence: {
    first: 'Используйте ',
    second: 'этот инструмент ',
    third:
      'для проверки результатов, вы можете также проверить исходный код чтобы увидеть реализацию, здесь вы найдете полную историю крушений:',
  },
  tableData: {
    headElements: ['Дата', 'Секрет', 'Серийный номер', 'Раунды'],
  },
};

const awardsText = {
  firstSentence: {
    first:
      'Чтобы определить исход открытия кейса мы используем следующие значения: ',
    second: 'секрет сервера ',
    third:
      '— это случайно сгенерированная строка, если начальный шифр сервера используется в данный момент, вам показывают его хэшированное значение, создание нового шифра сервера в настройках откроет предыдущий секрет сервера, ',
    fourth: 'секрет клиента ',
    fifth:
      '- это секрет, предоставленный вами, вы можете изменить его на любой который пожелаете в настройках, ',
    sixth: 'id кейса ',
    seventh:
      '– это числовое представление кейса (возможно, чтобы кейс за уровень имел два разных id для одного и того же уровня, так как содержимые предметы могут измениться, что требует создания нового id), ',
    eighth: 'номерок ',
    ninth:
      '– это число которое сопровождает текущий секрет сервера, он начинается с 1 и увеличивается в порядке возрастания, он сбрасывается на 1 каждый раз, когда вы сбрасываете начальный шифр сервера.',
  },
  secondSentence:
    'Эти значения, объединенные в SHA256 HMAC и преобразования, объясненные ниже, приведут к числу. Каждый предмет в кейсе имеет свой собственный диапазон билетов, и вы выигрываете тот предмет, в диапазон которого входит сгенерированное число.',
  thirdSentence: 'Следующий псевдокод объясняет, как мы определяем результат:',
  fourthSentence: {
    first: 'hash := hmac.New(sha256, serverSeed)',
    second: 'h.Write(clientSecret + ":" + nonce + ":" + caseid)',
    third: 'encoded := hex.EncodeToString(h.Sum())',
    fourth: 'int := strconv.ParseUint(encoded[:8], 16, 64)',
    fifth: 'result := (int % totalAmountofTickets) + 1',
  },
};

function ProvablyFairness() {
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');

  const [screen, setScreen] = useState('upgrader');
  const [tableData, setTableData] = useState([]);
  const [isTableLoaded, setIsTableLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const payload = await fetch('/honesty/upgrader');

      const newItems = [];

      payload.map(item => {
        newItems.push({
          row: [item.date, item.secret, item.serial_number, item.Rounds],
        });
      });

      setTableData(newItems);
      setIsTableLoaded(true);
    })();
  }, []);

  function renderContent() {
    if (screen === 'upgrader') {
      return (
        <Box pl={4} color="#898989">
          <Box mb={2}>{upgraderText.firstSentence}</Box>
          <Box mb={2}>{upgraderText.secondSentence}</Box>
          <Box mb={2}>{upgraderText.thirdSentence}</Box>
          <Box mb={2}>{upgraderText.fourthSentence}</Box>
          <Box mb={3}>
            {upgraderText.fifthSentence.first}
            <span style={{ color: '#F89D00' }}>
              {upgraderText.fifthSentence.second}
            </span>
            {upgraderText.fifthSentence.third}
          </Box>
          <Box className={s.tab}>
              {isTableLoaded && (
                <Table
                  headElements={upgraderText.tableData.headElements}
                  items={tableData}
                />
              )}
          </Box>
        </Box>
      );
    }
    return (
      <Box pl={4} color="#898989">
        <Box mb={2}>
          {awardsText.firstSentence.first}
          <span style={{ color: '#02C880' }}>
            {awardsText.firstSentence.second}
          </span>
          {awardsText.firstSentence.third}
          <span style={{ color: '#02C880' }}>
            {awardsText.firstSentence.fourth}
          </span>
          {awardsText.firstSentence.fifth}
          <span style={{ color: '#02C880' }}>
            {awardsText.firstSentence.sixth}
          </span>
          {awardsText.firstSentence.seventh}
          <span style={{ color: '#02C880' }}>
            {awardsText.firstSentence.eighth}
          </span>
          {awardsText.firstSentence.ninth}
        </Box>
        <Box mb={2}>{awardsText.secondSentence}</Box>
        <Box mb={3} color="#FFFFFF">
          <Box>{awardsText.fourthSentence.first}</Box>
          <Box>{awardsText.fourthSentence.second}</Box>
          <Box mb={2}>{awardsText.fourthSentence.third}</Box>
          <Box mb={2}>{awardsText.fourthSentence.fourth}</Box>
          <Box>{awardsText.fourthSentence.fifth}</Box>
        </Box>
      </Box>
    );
  }
  return (
    <div className={s.root}>
      <Box
        display="flex"
        fontSize={24}
        fontWeight={700}
        pt={4}
        color="#fff"
        mb={4}
        pl={4}
      >
        Честность
      </Box>
      <Box
        display="flex"
        minHeight={700}
        width={0.98}
        pl={0.5}
        pr={2}
        py={2}
        mb={3}
        mr={2}
        ml={1}
        borderRadius={10}
        flexDirection="column"
        bgcolor={theme.background.primary}
      >
        <Box display="flex" pl={4}>
          <Button
            value="Апгрейдер"
            borderColor="#7D20FF"
            color="#D0D0D0"
            bgcolor="#7D20FF"
            onClick={() => setScreen('upgrader')}
            variant={screen !== 'awards' ? 'contained' : 'outlined'}
            w="100px"
            h="30px"
            borderSize={screen === 'awards' ? '2px' : '0px'}
            m="0 20px 0 0"
          />
          <Button
            value="Награда за уровни"
            color="#D0D0D0"
            bgcolor="#7D20FF"
            borderColor="#7D20FF"
            onClick={() => setScreen('awards')}
            variant={screen === 'awards' ? 'contained' : 'outlined'}
            w="170px"
            h="30px"
            borderSize={screen === 'awards' ? '0px' : '2px'}
            m="0 20px 20px 0"
          />
        </Box>
        {renderContent()}
      </Box>
    </div>
  );
}

export default ProvablyFairness;
