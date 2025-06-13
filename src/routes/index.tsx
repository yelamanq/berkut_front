import { Routes, Route } from "react-router-dom";
import Home from "../features/home";
import PhotoDetail from "../features/photo";
import Favorites from "../features/favorites";
import Layout from "../layout/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}
