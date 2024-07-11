import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainRouter from './routes/MainRouter';
import AdminRouter from './routes/AdminRouter';

export default function App() {
    return (
        <>
            { window.location.href.includes('admin') && (
                <AdminRouter />
            ) || (
                <MainRouter />
            )}
        </>
    )
}