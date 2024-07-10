import Social from "./Social";
import githubLogo from "../assets/images/github_logo.png";
import linkedInLogo from "../assets/images/linkedin_logo.png";
import xLogo from "../assets/images/x_logo.png";
import igLogo from "../assets/images/ig_logo.png";

export default function Contact() {
  return (
    <div className="h-screen md:px-32 px-10 pt-20 flex flex-col">
      <div>
        <div className="text-white mb-5 w-72 md:w-2/5 text-wrap">
          <h1 className="text-2xl mb-2 font-nunito font-semibold">
            Let's connect!
          </h1>
          <p className="text-xl text-gray-400">
            Feel free to ping me if you want to build something together, have a
            question, or just wanna connect.
          </p>
        </div>
        <div className="mb-8">
          <a href="mailto:hardikroongta8@gmail.com">
            <h1 className="text-white text-xl underline">
              hardikroongta8@gmail.com
            </h1>
          </a>
        </div>
        <div>
          <ul className="flex gap-5 align-middle">
            <Social
              iconName={githubLogo}
              url="https://github.com/hardikroongta8"
            />
            <Social
              iconName={linkedInLogo}
              url="https://www.linkedin.com/in/hardikroongta8"
            />
            <Social iconName={xLogo} url="https://x.com/hardikroongta8" />
            <Social
              iconName={igLogo}
              url="https://www.instagram.com/hardikroongta8"
            />
          </ul>
        </div>
      </div>
      <div className=" font-montserrat text-center text-white grow content-end pb-10">
        <p>Thanks for stopping by!</p>
      </div>
    </div>
  );
}
