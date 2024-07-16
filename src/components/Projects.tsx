import { useRef } from "react";
import ProjectTile from "./ProjectTile";
import PageIntro from "./shared/PageIntro";
import { projects } from "../data/projects";

export default function Projects() {
  const projectRef = useRef(null);
  return (
    <div
      id="projects"
      ref={projectRef}
      className="md:h-screen pt-20 px-10 md:px-32"
    >
      <PageIntro
        title="Projects"
        description="Here are a few projects I've worked on, including some developed for college that are actively used by students on campus."
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
        {projects.map((e) => (
          <ProjectTile projectInfo={e} key={e.id} />
        ))}
      </div>
    </div>
  );
}
