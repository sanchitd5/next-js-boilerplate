import React, { useCallback, useContext } from 'react';
import { Link as NextLink } from 'next';
import { Typography, Box, Container, Card, CardContent, Divider, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import AppplicationWrapper from '../bricks/ApplicationWrapper';
import { API } from '../helpers';
import { LoginForm } from '../components';
import { LoginContext, DeviceInfoContext, LayoutContext } from '../contexts';
import { ConnectionConfig } from '../constants/index';


const useStyles = makeStyles(() => createStyles({
  developMessage: {
    position: 'absolute',
    bottom: '2vh',
    margin: 'auto',
    width: '100%'
  }
}));

const Login = () => {
  const classes = useStyles();
  const { setAccessToken } = useContext(LoginContext);
  const { deviceUUID, deviceName } = useContext(DeviceInfoContext);
  const { setCurrentUserRole } = useContext(LayoutContext);

  const performLogin = useCallback(async (loginValues) => {
    if (ConnectionConfig.bypassBackend) {
      setAccessToken('dummyToken'); 
    } else {
      let details = {
        ...loginValues, deviceData: {
          deviceType: 'WEB',
          deviceName: deviceName,
          deviceUUID: deviceUUID
        }
      };
      return API.login(details);
    }
  }, [setAccessToken, deviceUUID, deviceName]);

  let content = (
    <Box sx={{
      backgroundColor: 'background.default',
      display: 'flex', flexDirection: 'column',
      minHeight: '100vh'
    }} >
      <Container maxWidth="sm" sx={{
        py: {
          xs: '80px',
          sm: process.browser && window.screen.availHeight / 50
        }
      }}  >
        <Card>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 4 }} >
            <Box sx={{
              alignItems: 'center', display: 'flex', justifyContent: 'space-between', mb: 3,
            }}>
              <div>
                <Typography color="textPrimary" variant="h4" >
                  Login
                </Typography>
              </div>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 3 }} >
              <LoginForm login={(data) => {
                performLogin(data)
              }} onSuccess={() => { 

              }} />
            </Box>

            <Divider sx={{ my: 3 }} />
            <Link
              style={{
                pointer: 'cursor'
              }}
              color="textSecondary"
              component={NextLink}
              to="/register"
              variant="body2"
            >
              Create new account
            </Link>
          </CardContent>
        </Card>
      </Container>
      <Box mt={5}>
        <Typography className={classes.developMessage}
          variant="body2" color="textSecondary" align="center">
          Developed by Sanchit Dang
        </Typography>
      </Box>
    </Box>
  );
  return content;
}

const Exporter = () => {
  return <AppplicationWrapper><Login /></AppplicationWrapper>
}


export default Exporter;