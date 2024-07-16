import { Navigate, useParams } from "react-router-dom";
import { ProjectInfo, projects } from "../data/projects";

export default function ProjectDetailsPage() {
  const { path } = useParams();
  console.log(path);
  const projectDetails: ProjectInfo | undefined = projects.find(
    (e) => e.path === path
  );

  if (projectDetails === undefined) {
    return <Navigate to="/NotFound" />;
  } else return <div></div>;
}
