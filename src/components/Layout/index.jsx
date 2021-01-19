import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Header from './Header';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

import s from './styles.module.scss';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Chat from "../Chat";
import Inventory from "../Inventory";

function Layout({ children, background }) {
  const theme = useTheme();
  const mobileOrTablet = useMediaQuery('(max-width: 959px)');

  const [isOpen, setIsOpen] = useState(false)
  const [inv, setInv] = useState(false)

  const openChat = () => {
    setIsOpen(!isOpen)
  }
  const openInventory = () => {
    setIsOpen(!isOpen)
    setInv(!inv)
  }

  return (
    <Box
      className={s.root}
      width={1}
      height="100vh"
      bgcolor={theme.background[background]}
    >
      <Box className={s.wrapper}>
        <Header
          openInventory={openInventory}
        />
        {isOpen && <Box px={2} bgcolor={theme.background.primary} pb={50}>
          <Box
              width={1}
              height={58}
              bgcolor={theme.background.secondary}
              color="#fff"
              fontSize={18}
              fontWeight={700}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
          >
            <Box pl={3}>
              {inv ? "Инвентарь" : "Чат"}
            </Box>
            <Box pr={3}>
              <img src="/close.svg" alt="" onClick={openChat}/>
            </Box>
          </Box>
          {inv ? <Inventory/> : <Chat/>}
        </Box>}

        {!isOpen && <Box className={s.content} >
          {children.type.name !== 'ProvablyFairness' &&
          (!mobileOrTablet ? <LeftContent/> :
              <Box className={s.chatIcon} mb={3}>
                <img src="/mainIcon.svg" onClick={openChat}/>
              </Box>)}
          <RightContent>{children}</RightContent>
        </Box>}
      </Box>
    </Box>
  );
}

Layout.defaultProps = {
  background: 'primary',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf(['primary', 'secondary']),
};

export default Layout;
