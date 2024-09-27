import { Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.jsx'
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import zhch from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn'

import "@/assets/css/tailwindcss/index.css"
import "@/assets/css/reset/index.css";
import "normalize.css";
import store from './store';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <HashRouter>
        <ConfigProvider locale={zhch}>
          <App />
        </ConfigProvider>
      </HashRouter>
    </Suspense>
  </Provider>
)
