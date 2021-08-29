/***
 *  Created by Sanchit Dang
 * Layout/Application Router
 ***/
import React from 'react';
import Head from 'next/head';
import { ContextManager } from 'contexts';
import { Notification, DevModeSwitch, LoginCheck, GlobalStyles } from 'components';
import { DeveloperConfig } from 'constants/index';
import { ThemeProvider } from 'theme';

const AppplicationWrapper = ({ Component, pageProps }) => {
  return (<div>
    <Head>
      <title>
        Next JS boilerplate - Sanchit
      </title>
    </Head>
    <ContextManager>
      <ThemeProvider>
        <LoginCheck>
          <Component {...pageProps} />
          <GlobalStyles />
          {DeveloperConfig.visible ? <DevModeSwitch /> : ''}
          <Notification />
        </LoginCheck>
      </ThemeProvider>
    </ContextManager>
  </div>
  );
};

export default AppplicationWrapper;

