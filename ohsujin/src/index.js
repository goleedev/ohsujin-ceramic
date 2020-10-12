import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'css/styles.css';
import Footer from 'components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
