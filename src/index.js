import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'
import './assets/fonts/Inter-Black.ttf'
import './assets/fonts/Inter-Bold.ttf'
import './assets/fonts/Inter-ExtraBold.ttf'
import './assets/fonts/Inter-ExtraLight.ttf'
import './assets/fonts/Inter-Light.ttf'
import './assets/fonts/Inter-Medium.ttf'
import './assets/fonts/Inter-Regular.ttf'
import './assets/fonts/Inter-SemiBold.ttf'
import './assets/fonts/Inter-Thin.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
