import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from './components/App/App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(251, 204, 6)'
    },
    secondary: {
      main: 'rgb(234,28,36)'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <div className='indexStyle'>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
