import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPages/AboutPage";
import GalleryPage from "../pages/GalleryPages/GalleryPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import CuriculumPage from "../pages/Co-CurriculurPages/CuriculumPage";
import AcademicsPage from "../pages/AcadmicPages/AcadmicsPage";
import AdmissionPage from "../pages/AdmissionPages/AdmissionPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="co-curricular" element={<CuriculumPage />} />
        <Route path="academics" element={<AcademicsPage />} />
        <Route path="admission" element={<AdmissionPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
