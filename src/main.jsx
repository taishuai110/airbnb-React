// import { Suspense } from 'react';
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


// 注意 在main文件中使用Suspense会刷新两次页面的，所以要把Suspense文件放在App.jsx文件中使用让公共组件不要刷新两次了
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <HashRouter>
        <ConfigProvider locale={zhch}>
          <App />
        </ConfigProvider>
      </HashRouter>
    {/* </Suspense> */}
  </Provider>
)
