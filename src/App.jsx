import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from '@/components/app-header/index.jsx';
import AppFooter from "@/components/app-footer/index.jsx";
import useScrollTop from '@/hooks/useScrollTop.js';

const App = memo(() => {
  useScrollTop();

  return (
    <div className="app">
      <AppHeader></AppHeader>
      <Suspense fallback="loading">
        <div className="page">
          {/* 设置路由 */}
          {
            useRoutes(routes)
          }
        </div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  )
})

export default App