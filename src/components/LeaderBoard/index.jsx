import React from 'react';

import s from './styles.module.scss';
import { useLeaders } from '../../lib/api/leaders';
import Leader from './Leader';

export default function LeaderBoard() {
  const { leaders, currentUser } = useLeaders();

  const renderCurrent = () => {
    if (!currentUser) {
      return '';
    }

    return (
      <table className={s.root}>
        <thead className={s.head}>
          <tr>
            <td>Пользователь</td>
          </tr>
        </thead>
        <tbody>
          <Leader leader={currentUser} />;
        </tbody>
      </table>
    );
  };

  return (
    <>
      <table className={s.root}>
        <thead className={s.head}>
          <tr>
            <td>Пользователь</td>
            <td>Выигрыш</td>
            <td>Приз</td>
          </tr>
        </thead>
        <tbody>
          {!!leaders &&
            leaders.length > 0 &&
            leaders.map(leader => {
              return <Leader key={leader.position} leader={leader} />;
            })}
        </tbody>
      </table>

      {renderCurrent()}
    </>
  );
}
