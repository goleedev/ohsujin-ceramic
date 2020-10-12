import React, { useState } from 'react';
import AppRouter from './Router';
import Footer from './Footer';
import { authService } from 'fbase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  );
}

export default App;
