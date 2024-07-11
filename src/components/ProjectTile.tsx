type projectInfo = {
  imageUrl: string;
  title: string;
  description: string;
};

export default function ProjectTile(props: projectInfo) {
  return (
    <div className="flex flex-col justify-between mb-10 md:mb-0">
      <div className=" w-full font-nunito border-gray-300">
        <div className="bg-slate-400 rounded mb-4">
          <img src={props.imageUrl} className="h-48" />
        </div>
        <div className="px-1 mt-2">
          <div className="flex justify-between">
            <h2 className="text-xl text-white mb-2">{props.title}</h2>
          </div>
          <p className="text-base font-montserrat text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
      <h2 className="font-montserrat text-gray-200 mt-5">PROJECT DETAILS</h2>
    </div>
  );
}
