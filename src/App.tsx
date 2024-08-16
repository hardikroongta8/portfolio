import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./components/Profile";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<HomePage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="projects" element={<ProjectsList />} />
            <Route path="contact" element={<Contact />} />
          </Route>
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
