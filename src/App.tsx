import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="project">
            <Route index element={<Navigate to="/NotFound" />} />
            <Route path=":path" element={<ProjectDetailsPage />} />
          </Route>
          <Route path="NotFound" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/NotFound" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
