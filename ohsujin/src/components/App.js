import React, { useState, useEffect } from 'react';
import AppRouter from './Router';
import { authService } from 'fbase';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
    </>
  );
}

export default App;
