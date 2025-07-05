import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import MainPage from "../pages/Home/MainPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/main" element={<MainPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
