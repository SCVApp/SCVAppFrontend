import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const LoginRoute = lazy(() => import("./LoginRoute"));
const AboutPage = lazy(() => import("../pages/aboutPage/aboutPage"));
const ThemePage = lazy(() => import("../pages/ThemePage"));
const AlertUI = lazy(() => import("../components/AlertUI"));

const RoutePage = () => {
  return (
    <BrowserRouter>
      <ThemePage />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="*" element={<LoginRoute />} />
        </Routes>
        <AlertUI />
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutePage;