import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'


import App from '@/App';
import 'antd/dist/antd.less';
import "@/assets/css/index.less"
import 'normalize.css';
import store from '@/store'
import {ThemeProvider} from 'styled-components'
import theme from './assets/theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    <Provider store={store}>
      <Suspense fallback="loading">
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>

  // </React.StrictMode>
);

