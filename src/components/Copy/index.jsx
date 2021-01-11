import Button from '../UiKit/Button';
import React from 'react';
import PropTypes from 'prop-types';

function Copy({ text }) {
  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <Button
      value={<img src="/copy.svg" alt="copy" style={{ width: 20 }} />}
      borderSize="0px"
      bgcolor="#FB9414"
      color="#141415"
      w="41px"
      h="40px"
      m="28px 0 0 20px"
      onClick={copyToClipboard}
    />
  );
}

Copy.propTypes = {
  text: PropTypes.shape().isRequired,
};
export default Copy;
