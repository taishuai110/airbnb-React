// 封装页面到顶部的hook

import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function useScrollTop() {
    // 来自路由的location, 
    const location = useLocation()

    // 监听路径是否发生了改变
    useEffect(() => {
        // 页面发生改变，就滚动到最上面
        window.scrollTo(0, 0);
    }, [location.pathname])
}