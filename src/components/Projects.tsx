import ProjectTile from "./ProjectTile";
import PageIntro from "./shared/PageIntro";

export default function Projects() {
  return (
    <div className="md:h-screen pt-20 px-10 md:px-32">
      <PageIntro
        title="Projects"
        description="Here are a few projects I've worked on, including some developed for college that are actively used by students on campus."
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
        <ProjectTile
          title="OneStop"
          description="A student-centric mobile app, assisting in daily challenges and enhancing essential utilities at IIT Guwahati."
          imageUrl=""
        />
        <ProjectTile
          title="CollegeCupid"
          description="A fully encrypted matchmaking app for campus students."
          imageUrl=""
        />
        <ProjectTile
          title="GateLog"
          description="A device that logs student entries and exits at campus gates by scanning QR present on the mobile app."
          imageUrl=""
        />
      </div>
    </div>
  );
}
