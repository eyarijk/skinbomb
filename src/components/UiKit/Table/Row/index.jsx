import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";

function Row({ row, collapsable, hidden }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr
        key={Math.round(Math.random() * 10000)}
        className="row"
        onClick={() => setOpen(!open)}
      >
        {collapsable && (
          <td className="collapse-icon">
            <img
              className="icon"
              src={open ? '/cancel.svg' : '/plus.svg'}
              alt="icon"
            />
          </td>
        )}
        {row.map(item => {
          if (item === row[3]) {
            return (
              <Link href={`/statistic-daily?date=${row[0]}`} component="b">
                <a style={{cursor: 'pointer'}}>
                <td className="item" style={{color: 'orange'}} key={item}>
                  {item}
                </td>
                </a>
              </Link>
            );
          }
          return (
            <td className="item" style={{color: 'white'}} key={item}>
              {item}
            </td>
          );
        })}
      </tr>
      {collapsable && (
        <tr className="row accordion">
          <td colSpan="5">{hidden}</td>
        </tr>
      )}
      <style jsx>{`
        .row {
          height: 54px;
          border-bottom: 1px solid #434343;
        }

        .collapse-icon {
          height: 54px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .item {
          text-align: left;
          padding-left: 20px;
          padding-right: 20px;
          font-size: 16px;
          font-weight: 400;
          color: #e5e5e5;
        }

        .accordion {
          display: ${open ? '' : 'none'};
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          color: #898989;
        }

        .accordion > td {
          padding: 16px 60px;
        }
      `}</style>
    </>
  );
}

Row.defaultProps = {
  collapsable: false,
  hidden: '',
};

Row.propTypes = {
  row: PropTypes.array.isRequired,
  collapsable: PropTypes.bool,
  hidden: PropTypes.string,
};

export default Row;
