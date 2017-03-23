import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './Containers/App'
import configureStore from './Redux/ConfigureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin()

import './index.css';

const store = configureStore()

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
