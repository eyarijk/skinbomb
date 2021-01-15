import React, { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Box, Avatar, Button, ClickAwayListener } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useAuth } from '../../../lib/api/auth';

import s from './styles.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = props => {
  const theme = useTheme();

  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 1023px)');
  const isXsDes = useMediaQuery('(max-width: 1060px)');
  const isSmDes = useMediaQuery('(max-width: 1100px)');
  const isLgDes = useMediaQuery('(max-width: 1279px)');
  const isDesk = useMediaQuery('(max-width: 1459px)');

  const { push } = useRouter();
  const { user, removeToken, steamAuth } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const avatar = user ? user.avatar || 'noavatar.svg' : 'noavatar.svg';

  function onLoginClick() {
    steamAuth();
  }

  return (
    <Box xs={12}>
      <Box
        className={s.root}
        width={1}
        height={79}
        display={{ xs: 'none', md: 'flex' }}
        justifyContent="space-between"
        alignItems="center"
        px={(isTablet && 2) || (isLgDes && 3) || 5}
        bgcolor={theme.background.primary}
        flexGrow={1}
      >
        <Box display="flex" alignItems="center">
          <Link href="/">
            <img className={s.logo} src="/Logo.svg" alt="logo" />
          </Link>
          <Box
            display="flex"
            ml={
              (user && isSmDes && 2) || (isTablet && 3) || (isLgDes && 7) || 11
            }
            color="#979797"
            alignItems="center"
          >
            {user && (
              <>
                <img className={s.wallet} src="/wallet.svg" alt="wallet" />
                <Box
                  ml={1.3}
                  mr={(isLgDes && user && 1) || 4.5}
                  fontSize={isLgDes && user ? '16px' : ''}
                >
                  {(user?.amount).toFixed(2)} $
                </Box>
                <Link href="/top-up">
                  <Box
                    className={s.button}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Пополнить
                  </Box>
                </Link>
                <Link href="/store">
                  <Box
                    className={cn(s.button, s.shop)}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Магазин
                  </Box>
                </Link>
              </>
            )}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mr={2.5}>
          <Box
            color="#fff"
            display="flex"
            mx={isDesk ? 1 : 9}
            fontSize={(isXsDes && user && 10) || 14}
          >
            <Box className={s.navLinkBlock}>
              <img src="/refferal.svg" alt="ref" />
              <Link href="/referral" className={s.navLink}>
                <span className={s.navLink}>Рефералы</span>
              </Link>
            </Box>
            <Box className={s.navLinkBlock}>
              <img src="/provably-fairness.svg" alt="ref" />
              <Link href="/provably-fairness" className={s.navLink}>
                <span className={s.navLink}>Честность</span>
              </Link>
            </Box>
            <Box className={s.navLinkBlock}>
              <img src="/support.svg" alt="ref" />
              <Link href="/support" className={s.navLink}>
                <span className={s.navLink}>Поддержка</span>
              </Link>
            </Box>
            <Box className={s.navLinkBlock}>
              <img src="/leaders.svg" alt="ref" />
              <Link href="/leaders" className={s.navLink}>
                <span className={s.navLink}>Лидеры</span>
              </Link>
            </Box>
            <Box className={s.navLinkBlock}>
              <img src="/cases.svg" alt="ref" />
              <Link href="/cases" className={s.navLink}>
                <span className={s.navLink}>Кейсы</span>
              </Link>
            </Box>
          </Box>
          {user ? (
            <Box display="flex" flexDirection="column" position="relative">
              <Box
                onClick={() => setShowUserMenu(prevVal => !prevVal)}
                display="flex"
                alignItems="center"
                bgcolor={showUserMenu ? '#1F1F1F' : 'transparent'}
                px={1}
                borderRadius={10}
                border={showUserMenu ? '1px solid #282828' : 'none'}
                zIndex={3}
                style={{ cursor: 'pointer' }}
              >
                <Avatar src={avatar} alt="avatar" />
                {user &&
                  <Box
                    color="#fff"
                    // mr={isDesk && user && 1}
                    ml={(isXsDes && 0.5) || 1.5}
                    fontSize={16}
                    fontWeight={700}
                    w={isLgDes ? '100px' : '80px'}
                    className="user-name__block"
                  >
                    {user.nickname}
                  </Box>
                }
                {showUserMenu && (
                  <img
                    style={{ transform: 'rotate(180deg)' }}
                    src="/arrow-down.svg"
                    alt="arrow"
                  />
                )}
              </Box>
              <Box
                display={showUserMenu ? 'block' : 'none'}
                position="absolute"
                top={38}
                width={1}
                border="1px solid #282828"
                borderTop={0}
                borderRadius="0 0 10px 10px"
                p={1.5}
                bgcolor={theme.background.primary}
                zIndex={2}
              >
                <div className={s.option} onClick={() => push('/games')}>
                  Игры
                </div>
                <div className={s.option} onClick={() => push('/transactions')}>
                  Транзакции
                </div>
                <div className={s.option} onClick={() => push('/settings')}>
                  Настройки
                </div>
                <div className={s.option} onClick={removeToken}>
                  Выйти
                </div>
              </Box>
            </Box>
          ) : (
            <Button className={s.loginButton} onClick={onLoginClick}>
              <img src="login.svg" alt="login" />
            </Button>
          )}
        </Box>
      </Box>
      <Box
        className={s.rootMobile}
        width={1}
        height={60}
        display={{ xs: 'flex', md: 'none' }}
        justifyContent="space-between"
        alignItems="center"
        px={2.5}
        bgcolor={theme.background.primary}
        flexGrow={1}
      >
        <Box className={s.clickable} onClick={() => setShowMobileMenu(true)}>
          <img src="/menu.svg" alt="menu" />
        </Box>
        <Link href="/">
          <img className={s.logo} src="/Logo.svg" alt="logo" />
        </Link>
        {user ? (
          <Avatar src={avatar} alt="avatar" style={{ width: 30, height: 30 }} />
        ) : (
          <Box className={s.clickable}>
            <img src="/login-mobile.svg" alt="login" />
          </Box>
        )}
      </Box>
      {showMobileMenu && (
        <ClickAwayListener onClickAway={() => setShowMobileMenu(false)}>
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            width={(isMobile && 250) || 350}
            zIndex={9999}
            bgcolor="#070707"
            p={2.5}
            className={s.sideBar}
            height={900}
          >
            <Box
              width={1}
              display="flex"
              justifyContent="space-between"
              mb={1.5}
            >
              <Box display="flex" alignItems="center">
                {user && (
                  <>
                    <Avatar src={avatar} alt="avatar" />
                    <Box
                      color="#fff"
                      ml={1.5}
                      fontSize={16}
                      fontWeight={700}
                      width={130}
                      fontFamily="Open Sans, sans-serif"
                    >
                      {user.nickname}
                    </Box>
                  </>
                )}
              </Box>
              <Box onClick={() => setShowMobileMenu(false)}>
                <img src="/close.svg" alt="close" />
              </Box>
            </Box>
            {user ? (
              <Box display="flex" flexDirection="column">
                <Box display="flex" mb={2.5}>
                  <img className={s.wallet} src="/wallet.svg" alt="wallet" />
                  <Box
                    ml={1}
                    fontSize={16}
                    fontWeight={400}
                    color="#979797"
                    fontFamily="Open Sans, sans-serif"
                  >
                    {user.amount} $
                  </Box>
                </Box>
                <Box mb={2.5}>
                  <Link href="/top-up">
                    <Box
                      className={s.button}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={2.5}
                    >
                      Пополнить
                    </Box>
                  </Link>
                  <Link href="/store">
                    <Box
                      className={cn(s.button, s.shop)}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      Магазин
                    </Box>
                  </Link>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box
                  fontSize={14}
                  fontWeight={400}
                  color="#c4c4c4"
                  fontFamily="Open Sans, sans-serif"
                >
                  Войдите, чтобы начать играть
                </Box>
                <Box my={2.5} onClick={onLoginClick}>
                  <img src="/login-steam.svg" alt="login" />
                </Box>
                <Box
                  fontSize={10}
                  fontWeight={400}
                  color="#c4c4c4"
                  fontFamily="Open Sans, sans-serif"
                >
                  Заходя на этот сайт, вы подтверждаете, что вам исполнилось 18
                  лет и вы соглашаетесь с{' '}
                  <Box component="span" color="#F89D00">
                    Условиями пользовательского соглашения
                  </Box>
                </Box>
              </Box>
            )}
            <Box
              fontWeight={400}
              fontSize={18}
              color="#828282"
              fontFamily="Open Sans, sans-serif"
              display="flex"
              flexDirection="column"
              pt={2}
            >
              <div className={s.navLink} onClick={props.openInventory}>
                <span className={s.navLink}>Инвентарь</span>
              </div>
              <Link href="/referral" className={s.navLink}>
                <span className={s.navLink}>Рефералы</span>
              </Link>
              <Link href="/provably-fairness" className={s.navLink}>
                <span className={s.navLink}>Честность</span>
              </Link>
              <Link href="/support" className={s.navLink}>
                <span className={s.navLink}>Поддержка</span>
              </Link>
              <Link href="/leaders" className={s.navLink}>
                <span className={s.navLink}>Лидеры</span>
              </Link>
              <Link href="/cases" className={s.navLink}>
                <span className={s.navLink}>Кейсы</span>
              </Link>
            </Box>
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default Header;
