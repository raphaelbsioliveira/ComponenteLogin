import React, {useState} from 'react';
import './App.css';
import Login from './Login';
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App(){

  //const { token, setToken } = useToken();
  //const token = getToken();

  const [token, setToken] = useState();
  console.log(token);
  if(!token) {
    return <Login setToken={setToken}  />
  }

  return (
    <div className="wrapper">
      <h1>Logado na aplicação</h1>
    </div>
  );
}

export default App;
