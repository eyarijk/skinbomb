import s from './styles.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Leader({ leader }) {
  return (
    <>
      <tr key={leader.id} className={s.leader}>
        <td className={s.user}>
          <div className={s.wrapper}>
            <div className={s.avatar}>
              <div>{leader.position}</div>
              <img src={leader.avatar} alt="avatar" />
            </div>
            <span className={s.name}>{leader.user}</span>
          </div>
        </td>
        <td>{leader.tickets}</td>
        <td className={s.prize}>{leader.prize ? leader.prize.toFixed(2) : ''}</td>
      </tr>
      <tr className={s.empty} />
    </>
  );
}

Leader.propTypes = {
  leader: PropTypes.object.isRequired,
};

export default Leader;
