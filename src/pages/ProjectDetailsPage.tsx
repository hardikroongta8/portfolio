import { Navigate, useParams } from "react-router-dom";
import { ProjectInfo, projects } from "../data/projects";
import BackButton from "../components/project_details/BackButton";
import LinksList from "../components/project_details/LinksList";

export default function ProjectDetailsPage() {
  const { path } = useParams();
  console.log(path);
  const projectDetails: ProjectInfo | undefined = projects.find(
    (e) => e.path === path
  );

  if (projectDetails === undefined) {
    return <Navigate to="/NotFound" />;
  } else {
    return (
      <div className="h-screen">
        <header>
          <BackButton />
        </header>
        <main className="mx-auto w-full h-3/6 text-white font-nunito px-8 sm:px-20 lg:px-32">
          <h1 className="text-2xl md:text-4xl mb-5 md:mb-10 pt-24 font-semibold">
            {projectDetails.title}
          </h1>
          <div className="lg:flex mb-16 md:justify-between">
            <img
              className="w-full object-cover aspect-video mx-auto md:mx-0 mb-5 lg:mb-0 rounded-lg"
              src={projectDetails.imageUrl}
            />
            <div className="flex flex-col w-full lg:w-fit md:justify-between sm:text-md lg:ml-10">
              {projectDetails.description.split("\n").map((e) => (
                <p className="pb-2 font-montserrat text-gray-200" key={e}>
                  {e}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-x-20 gap-y-5 sm:gap-0 sm:flex sm:justify-between mt-10 font-nunito font-semibold text-gray-500">
                <LinksList list={projectDetails.githubLinks} title="GitHub" />
                <LinksList list={projectDetails.appLinks} title="Download" />
                <LinksList list={projectDetails.otherLinks} title="Other" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
