import React from 'react';

import s from './styles.module.scss';
import { useLeaders } from '../../lib/api/leaders';

export default function LeaderBoard() {
  const { leaders } = useLeaders();

  return (
    <table className={s.root}>
      <thead className={s.head}>
        <tr>
          <td>Ползователь</td>
          <td>Выигрыш</td>
          <td>Приз</td>
        </tr>
      </thead>
      <tbody>
        {!!leaders &&
          leaders.length > 0 &&
          leaders.map((leader, i) => {
            return (
              <>
                <tr key={leader.id} className={s.leader}>
                  <td className={s.user}>
                    <div className={s.wrapper}>
                      <div className={s.avatar}>
                        <div>{i + 1}</div>
                        <img src={leader.avatar} alt="avatar" />
                      </div>
                      <span className={s.name}>{leader.user}</span>
                    </div>
                  </td>
                  <td className={s.tickets}>{leader.tickets}</td>
                  <td className={s.prize}>{leader.prize.toFixed(2)}</td>
                </tr>
                <tr className={s.empty} />
              </>
            );
          })}
      </tbody>
    </table>
  );
}
