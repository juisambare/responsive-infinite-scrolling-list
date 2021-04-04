import React from 'react';
import useToken from './../Login/useToken';
import { useHistory } from 'react-router-dom';
import customerList from './customerList.json';
import User from './User';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoutButton: {
    float: 'right',
    fontSize: '14px',
    color: 'white',
    backgroundColor: 'red',
  },
  container: {
    padding: '30px',
    height: '400px',
    overflowY: 'scroll',
  },
}));

export default function Home() {
  const { removeToken } = useToken();
  const classes = useStyles();
  const [usersList, setUsersList] = React.useState([...customerList.customers]);
  const users = customerList.customers;
  const history = useHistory();
  const handleLogout = () => {
    removeToken();
    history.push('/login');
  };
  console.log(users);
  const handleScroll = (event) => {
    const target = event.target;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      console.log('reached');
      setUsersList([...usersList, ...users]);
    }
  };
  return (
    <>
      <button className={classes.logoutButton} onClick={handleLogout}>
        Logout
      </button>
      <h2>Users</h2>
      <div className={classes.container} onScroll={handleScroll}>
        {usersList.map((user) => {
          return <User user={user} />;
        })}
      </div>
    </>
  );
}
