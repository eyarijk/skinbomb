import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

function Table({ headElements, collapsable, items }) {
  return (
    <>
      <table className="root">
        <thead>
          <tr className="head">
            {collapsable && <td className="head-element empty" />}
            {headElements.map(headItem => (
              <th className="head-element" key={headItem}>
                {headItem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <Row
                key={Math.round(Math.random() * 10000)}
                row={item.row}
                hidden={item.hidden}
                collapsable={collapsable}
              />
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        .root {
          width: 100%;
          border: 1px solid #434343;
          border-collapse: collapse;
        }

        .head {
          height: 54px;
        }

        .head-element {
          background-color: #494949;
          text-align: left;
          padding-left: 20px;
          padding-right: 20px;
          font-size: 16px;
          font-weight: 400;
          color: #e5e5e5;
        }

        .empty {
          width: 40px;
        }
      `}</style>
    </>
  );
}

Table.defaultProps = {
  headElements: [],
  collapsable: false,
};

Table.propTypes = {
  items: PropTypes.array.isRequired,
  headElements: PropTypes.array,
  collapsable: PropTypes.bool,
};

export default Table;
