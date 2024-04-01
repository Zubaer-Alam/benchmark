import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicePage from "../pages/ServicesPage/ServicePage";
import RecruitPage from "../pages/RecruitPage/RecruitPage";
import CollaboratePage from "../pages/CollaboratePage/CollaboratePage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import ApplyPage from "../pages/ApplyPage/ApplyPage";



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
                path: "/apply",
                element: <ApplyPage />,
            },
            {
                path: "/recruit",
                element: <RecruitPage />,
            },
            {
                path: "/collaborate",
                element: <CollaboratePage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path:"/gallery",
                element: <GalleryPage/>
            }

        ],
    },

    {
        path: "/login",
        element: <HomePage />,
    },


]);

export default router;
