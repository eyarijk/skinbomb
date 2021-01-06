import React from 'react';
import PropTypes from 'prop-types';

function Input({
  value,
  onChange,
  placeholder,
  type,
  name,
  label,
  w,
  h,
  borderSize,
  borderColor,
  color,
  align,
  bgcolor,
  fontSize,
  fontWeight,
  fontFamily,
  addon,
}) {
  function handleInput(event) {
    onChange(event.target.value);
  }

  return (
    <div className="root">
      {label !== '' && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="input"
        id={name}
        name={name}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        type={type}
      />
      {addon !== '' && <span className="addon">{addon}</span>}
      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
        }

        .label {
          color: #f5f5f5;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.44px;
          padding-bottom: 8px;
          cursor: pointer;
        }

        .input {
          height: ${h};
          width: ${w};
          background-color: ${bgcolor};
          outline: 0;
          border: ${borderSize} solid ${borderColor};
          border-radius: 10px;
          color: ${color};
          padding: 0 10px;
          text-align: ${align};
          font-family: ${fontFamily};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
        }

        .addon {
          position: absolute;
          right: 12px;
          bottom: 14px;
          color: #fff;
          font-family: Open Sans, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          color: #4a4a4a;
        }
      `}</style>
    </div>
  );
}

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  borderSize: '1px',
  borderColor: '#58AD3A',
  bgcolor: '#070707',
  label: '',
  w: 'unset',
  h: 'unset',
  color: '#fff',
  fontSize: '13.3333px',
  fontWeight: 400,
  fontFamily: 'Arial',
  addon: '',
};

Input.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  borderSize: PropTypes.string,
  borderColor: PropTypes.string,
  bgcolor: PropTypes.string,
  align: PropTypes.string,
  label: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  fontFamily: PropTypes.string,
  addon: PropTypes.string,
};

export default Input;
