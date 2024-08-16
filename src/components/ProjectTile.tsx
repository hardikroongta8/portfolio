import { Link } from "react-router-dom";
import { ProjectInfo } from "../data/projects";

type ProjectProps = {
  projectInfo: ProjectInfo;
};

export default function ProjectTile(props: ProjectProps) {
  const { projectInfo } = props;
  return (
    <div className="flex mx-2 h-96 flex-col justify-between mb-10 md:mb-0">
      <div className="w-full font-nunito border-gray-300">
        <div className="mb-4">
          <img
            src={projectInfo.imageUrl}
            className="h-52 rounded-lg object-cover"
          />
        </div>
        <div className="px-1 mt-2">
          <div className="flex justify-between">
            <h2 className="text-xl text-white mb-2">{projectInfo.title}</h2>
          </div>
          <p className="text-base font-montserrat text-gray-400 line-clamp-3">
            {projectInfo.summary}
          </p>
        </div>
      </div>
      <Link to={`/project/${projectInfo.path}`}>
        <h2 className="font-montserrat text-gray-200 px-1 mt-5 hover:underline">
          PROJECT DETAILS
        </h2>
      </Link>
    </div>
  );
}
