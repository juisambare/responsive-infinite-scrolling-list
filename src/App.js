import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import useToken from './components/Login/useToken';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '20px',
  },
}));

function App() {
  const classes = useStyles();
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className={classes.wrapper}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
