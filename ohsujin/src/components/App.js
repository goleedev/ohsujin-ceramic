import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from 'fbase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
    </>
  );
}

export default App;
