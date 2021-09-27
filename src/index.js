import React from 'react';
import ReactDOM from 'react-dom';
import es_ES from 'antd/lib/locale/es_ES';
import { ConfigProvider } from 'antd';

import Routes from './routes';

import 'antd/dist/antd.css';
import './index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={es_ES}>
        <Routes/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
