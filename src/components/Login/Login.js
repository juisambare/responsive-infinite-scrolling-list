import React, { createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Login({ setToken }) {
  const classes = useStyles();
  const username = createRef();
  const password = createRef();

  async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username: username.current.value,
      password: password.current.value,
    });
    setToken(token);
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <h1>Please log-in</h1>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>Username:</Grid>
            <Grid item>
              <input type="text" ref={username} />
            </Grid>
            <Grid item>Password:</Grid>
            <Grid item>
              <input type="password" ref={password} />
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <input type="submit" value="Submit" />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
