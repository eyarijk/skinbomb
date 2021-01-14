import React from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useTransactions } from '../../../lib/api/transactions';
import s from './styles.module.scss';
import * as moment from 'moment';

function Transactions() {
  const theme = useTheme();
  const { transactions } = useTransactions();

  return (
    <Box width={1} height={1} display="flex" flexDirection="column">
      <Box
        component="h1"
        fontWeight={700}
        fontSize={24}
        lineHeight="36px"
        color="#fff"
        px={2}
      >
        Транзакции
      </Box>
      <Box
        width={1}
        bgcolor={theme.background.primary}
        borderRadius={10}
        p={1}
        flexGrow={1}
        height="1px"
        className={s.root}
      >
        {transactions.length > 0 && (
          <table className={s.tableRoot}>
            <thead>
              <tr className={s.head}>
                {['Дата', 'Статус', 'Сервис', 'Сумма'].map(headItem => (
                  <th className={s.headElement} key={headItem}>
                    {headItem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map(item => (
                <tr key={Math.round(Math.random() * 10000)} className={s.row}>
                  <td className={s.item}>
                    {moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}
                  </td>
                  <td className={s.item}>{item.status}</td>
                  <td className={s.item}>{item.service}</td>
                  <td className={s.item}>$ {item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Box>
    </Box>
  );
}

export default Transactions;
