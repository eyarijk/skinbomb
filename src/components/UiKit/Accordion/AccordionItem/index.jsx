import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AccordionItem({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="root">
        <div onClick={() => setOpen(!open)} className="title-wrapper">
          <span className="icon-wrapper">
            <img
              className="icon"
              src={open ? '/cancel.svg' : '/plus.svg'}
              alt="icon"
            />
          </span>
          <div className="title">{title}</div>
        </div>
        {open && <div className="content">{content}</div>}
      </div>
      <style jsx>{`
        .root {
          height: auto;
          width: 100%;
          border-bottom: 1px solid #434343;
        }

        .root:last-child {
          border: 0;
        }

        .title-wrapper {
          display: flex;
          align-items: center;
          height: 54px;
          border-bottom: ${open ? '1px solid #434343' : '0'};
          background-color: ${open ? '#202020' : 'transparent'};
        }

        .icon-wrapper {
          width: 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-size: 16px;
          font-weight: 400;
          color: #e6e6e6;
          font-family: Open Sans, sans-serif;
        }

        .content {
          padding: 10px 40px;
          font-family: Open Sans, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.44px;
          color: #898989;
        }
      `}</style>
    </>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default AccordionItem;
