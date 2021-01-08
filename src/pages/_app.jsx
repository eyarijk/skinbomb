import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from '../styles/theme';
import { AuthProvider } from '../lib/api/auth';
import { SkinsProvider } from '../lib/api/skins';
import { ChatProvider } from '../lib/api/chat';
import { RoundsProvider } from '../lib/api/rounds';
import { ReferralsProvider } from '../lib/api/referrals';
import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Router from 'next/router';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    setLoader(false);
  }, []);

  Router.onRouteChangeStart = () => {
    setLoader(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoader(false);
  };

  Router.onRouteChangeError = () => {
    setLoader(false);
  };

  return (
    <>
      <Head>
        <title>Skinbomb</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="verification" content="671ee44b9addaa58db26c43697360f" />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SkinsProvider>
            <ChatProvider>
              <RoundsProvider>
                <ReferralsProvider>
                  <CssBaseline />
                  {loader ? <Loading /> : <Component {...pageProps} />}
                </ReferralsProvider>
              </RoundsProvider>
            </ChatProvider>
          </SkinsProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
};

export default MyApp;
