import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;

    try {
      history.push("/");
    } catch (error) {
      console.log (error);
    }
  }

  const googleError = () => { };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <GoogleLogin clientId="336931713145-ahtbqpuou6d3qtshph16957sijquupr4.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              color="primary"
              fullWidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Google Sign In
          </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
        />
      </Paper>
    </Container>
  );
}

export default Auth