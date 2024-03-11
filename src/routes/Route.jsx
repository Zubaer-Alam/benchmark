import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicePage from "../pages/ServicesPage/ServicePage";
import WorkersPage from "../pages/WorkersPage/WorkersPage";
import CompaniesPage from "../pages/CompaniesPage/CompaniesPage";
import CorporatePage from "../pages/CorporatePage/CorporatePage";


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
                path: "/about",
                element: <AboutPage />,
            },
           
            {
                path: "/services",
                element: <ServicePage />,
            },

            {
                path: "/workers",
                element: <WorkersPage />,
            },
            {
                path: "/companies",
                element: <CompaniesPage />,
            },
            {
                path: "/corporate",
                element: <CorporatePage />,
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
