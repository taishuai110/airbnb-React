import { lazy } from "react";
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import("@/views/home/index.jsx"));
const Entire = lazy(() => import("@/views/entire/index.jsx"));
const Detail = lazy(() => import("@/views/detail/index.jsx"));

const routes = [
    {
        path: "/",
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: "/home",
        // Suspense用于页面还没加载出来时所展示的另外一个页面
        element: <Home />
    },
    {
        path: "/entire",
        element: <Entire />
    },
    {
        path: "/detail",
        element: <Detail />
    }
]

export default routes;