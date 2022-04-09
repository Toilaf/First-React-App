import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header.js';
import Footer from './Footer.js';

ReactDOM.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>,
  document.getElementById('root')
);

// ReactDOM.render(<Header />, document.getElementById('root'))

