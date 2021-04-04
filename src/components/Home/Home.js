import React from 'react';
import useToken from './../Login/useToken';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const { removeToken } = useToken();
  const history = useHistory();
  const handleLogout = () => {
    removeToken();
    history.push('/login');
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <h2>Home</h2>
    </>
  );
}
