import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import style from './sass/style.sass'

ReactDOM.render(<App />, document.querySelector('.app'))

module.hot.accept()