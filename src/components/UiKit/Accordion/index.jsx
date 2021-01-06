import React from 'react';
import PropTypes from 'prop-types';

import AccordionItem from './AccordionItem';

function Accordion({ items }) {
  return (
    <>
      <div className="root">
        {items.map(item => (
          <AccordionItem
            key={Math.round(Math.random() * 10000)}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <style jsx>{`
        .root {
          border: 1px solid #434343;
          height: auto;
          width: 100%;
        }
      `}</style>
    </>
  );
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Accordion;
