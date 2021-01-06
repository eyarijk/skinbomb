import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Select({ value, onChange, options, title, placeholder, withPlaceholderOption = false }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="root">
        {title}
        <div className="select" onClick={() => setOpen(!open)}>
          {value !== null ? value.label : placeholder}
        </div>
        {open && (
          <div className="options-wrapper">
            {!!placeholder && !!withPlaceholderOption && (
              <div
                  className="option"
                  onClick={() => onChange(null)}
              >
                {placeholder}
              </div>
            )}
            {options.map(item => {
              return (
                <div
                  key={item.id}
                  className="option"
                  onClick={() => onChange(item)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <style jsx>{`
        .root {
          color: #696969;
          font-size: 16px;
          font-weight: 400;
        }

        .select {
          margin-top: 18px;
          background-color: ${open ? '#1F1F1F' : 'transparent'};
          outline: 0;
          border: 1px solid #282828;
          height: 38px;
          width: 100%;
          padding-left: 16px;
          box-sizing: border-box;
          color: ${open ? '#c6c6c6' : '#696969'};
          appearance: none;
          border-radius: 10px;
          position: relative;
          display: flex;
          align-items: center;
          cursor: default;
          padding-right: 30px;
          font-size: 10px;
          line-height: 20px;
          letter-spacing: 0.44px;
          color: #ffffff;
          font-family: Open Sans, sans-serif;
        }

        .select::after {
          content: '';
          display: inline-block;
          height: 20px;
          width: 20px;
          background-image: url('/arrow-down.svg');
          background-position: center;
          background-repeat: no-repeat;
          position: absolute;
          right: 10px;
          transition-duration: 0.2s;
          transform: rotate(${open ? 180 : 0}deg);
        }

        .options-wrapper {
          border: 1px solid #282828;
          border-top: 0;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
          padding: 20px 16px 10px;
          margin-top: -10px;
          max-height: 200px;
          overflow-y: scroll;
        }
        
        .options-wrapper::-webkit-scrollbar{
          background: transparent;
          width: 3px;
        }
          
        .options-wrapper::-webkit-scrollbar-thumb {
          background: -webkit-linear-gradient(310.77deg, #58AD3A 13.34%, #0FD53A 86.08%);
          background: linear-gradient(139.23deg, #58AD3A 13.34%, #0FD53A 86.08%);
          border-radius: 12px;
          width: 6px;
        }

        .option {
          font-size: 10px;
          font-weight: 400;
          height: 20px;
          border-bottom: 1px solid #696969;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .option:hover {
          color: #fff;
          border-color: #fff;
        }

        .option:last-child {
          border-bottom: 0;
        }
      `}</style>
    </>
  );
}

Select.defaultProps = {
  title: '',
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Select;
