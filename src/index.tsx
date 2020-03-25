import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <div className='indexStyle'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
