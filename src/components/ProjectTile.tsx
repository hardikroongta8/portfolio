import { ProjectInfo } from "../data/projects";

type ProjectProps = {
  projectInfo: ProjectInfo;
};

export default function ProjectTile(props: ProjectProps) {
  const { projectInfo } = props;
  return (
    <div className="flex flex-col justify-between max-w-96 mb-10 md:mb-0">
      <div className=" w-full font-nunito border-gray-300">
        <div className="bg-slate-400 rounded mb-4">
          <img src={projectInfo.imageUrl} className="h-52" />
        </div>
        <div className="px-1 mt-2">
          <div className="flex justify-between">
            <h2 className="text-xl text-white mb-2">{projectInfo.title}</h2>
          </div>
          <p className="text-base font-montserrat text-gray-400">
            {projectInfo.description}
          </p>
        </div>
      </div>
      <a href={`/project/${projectInfo.path}`}>
        <h2 className="font-montserrat text-gray-200 px-1 mt-5">
          PROJECT DETAILS
        </h2>
      </a>
    </div>
  );
}
