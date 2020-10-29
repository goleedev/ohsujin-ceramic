import React, { useState, useEffect } from 'react';
import AppRouter from './Router';
import { authService, dbService } from 'fbase';
import AOS from "aos";
import "aos/dist/aos.css";
import * as emailjs from "emailjs-com";
import Loading from './Loading';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (dbService) {
      setIsLoaded(true);
    }
  }, []);
  return (
    <>
      { isLoaded ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : <Loading /> }
    </>
  );
}

export default App;
