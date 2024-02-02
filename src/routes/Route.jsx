import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactPage.jsx/ContactPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout />
        ),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },

        ],
    },

    {
        path: "/login",
        element: <HomePage />,
    },


]);

export default router;
