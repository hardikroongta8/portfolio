import githubLogo from "../assets/images/github_logo.png";
import linkedInLogo from "../assets/images/linkedin_logo.png";
import xLogo from "../assets/images/x_logo.png";
import igLogo from "../assets/images/ig_logo.png";

export default function Socials() {
  return (
    <div className="grid gap-4 md:gap-8 justify-center">
      <div className="text-white text-2xl text-center md:text-left md:text-4xl">
        <h1>Let's connect!</h1>
      </div>
      <div>
        <ul className="flex gap-5 md:gap-10 align-middle">
          <li>
            <a href="https://github.com/hardikroongta8">
              <img
                src={githubLogo}
                className="h-6 md:h-10  hover:scale-125 transition duration-75"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hardikroongta8">
              <img
                src={linkedInLogo}
                className="h-6 md:h-10 hover:scale-125 transition duration-75"
              />
            </a>
          </li>
          <li>
            <a href="https://x.com/hardikroongta8">
              <img
                src={xLogo}
                className="h-6 md:h-10 hover:scale-125 transition duration-75"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hardikroongta8">
              <img
                src={igLogo}
                className="h-6 md:h-10 hover:scale-125 transition duration-75"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
