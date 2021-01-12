import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

function Button({
  value,
  onClick,
  variant,
  border,
  borderSize,
  borderColor,
  color,
  type,
  w,
  h,
  p,
  m,
  minWidth,
  bgcolor,
  fontSize,
  fontWeight,
  fontFamily,
}) {
  return (
    <>
      <div className="root">
        <Box
          className={`button ${variant}`}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={10}
          component="button"
          onClick={onClick}
          type={type}
          width={w}
          maxWidth={w}
          height={`${h}!important`}
          color={color}
          border={border}
          p={p}
          m={m}
          minWidth={minWidth}
          fontWeight={fontWeight}
          fontSize={fontSize}
          fontFamily={fontFamily}
        >
          {value}
        </Box>
      </div>
      <style jsx>{`
        .root :global(.button) {
          background: ${bgcolor};
          cursor: pointer;
          border-width: ${borderSize};
          border-color: ${borderColor};
          box-sizing: border-box;
          outline: 0;
        }

        .root :global(.outlined) {
          border-width: ${borderSize};
          border-style: solid;
          border-color: ${borderColor};
          color: ${color};
          background-color: transparent;
          box-sizing: border-box;
          outline: 0;
        }
        .root :global(.outlined):hover {
          background-color: ${borderColor};
        }
      `}</style>
    </>
  );
}

Button.defaultProps = {
  variant: 'contained',
  borderSize: '1.5px',
  borderColor: '#58AD3A',
  bgcolor: '#58AD3A',
  color: '#fff',
  type: 'button',
  w: 'unset',
  h: 'unset',
  p: 0,
  m: 0,
  minWidth: 'unset',
  fontSize: '13.3333px',
  fontWeight: 400,
  fontFamily: 'Arial',
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  borderSize: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  h: PropTypes.string,
  w: PropTypes.string,
  p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.string,
  bgcolor: PropTypes.string,
  fontSize: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  fontWeight: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  fontFamily: PropTypes.string,
};

export default Button;
