/***
 *  Created by Sanchit Dang
 ***/
import React, { useEffect } from 'react';
import { ContextManager } from '../contexts';
import { Notification, DevModeSwitch, LoginCheck, GlobalStyles } from '../components';
import { DeveloperConfig } from '../constants/index';
import { ThemeProvider } from '../theme';

const AppplicationWrapper = ({ children }) => {
  useEffect(() => {
    document.title = 'Next JS boilerplate'
  }, []);
  return (
    <ContextManager>
      <ThemeProvider>
        <LoginCheck>
          {children}
          <GlobalStyles />
          {DeveloperConfig.visible ? <DevModeSwitch /> : ''}
          <Notification />
        </LoginCheck>
      </ThemeProvider>
    </ContextManager>
  );
};

export default AppplicationWrapper;

 