import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

import s from './styles.module.scss';

function RightContent({ children }) {

  return (
    <>
      {children.type.name !== 'ProvablyFairness' ? (
        <Box className={s.root} maxHeight={1}>
          {children}
        </Box>
      ) : (
        <Box className={s.root_one} maxHeight={1}>
          {children}
        </Box>
      )}
    </>
  );
}

RightContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RightContent;
