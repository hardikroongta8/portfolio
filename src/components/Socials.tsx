import githubLogo from "../assets/images/github_logo.png";
import linkedInLogo from "../assets/images/linkedin_logo.png";
import xLogo from "../assets/images/x_logo.png";
import igLogo from "../assets/images/ig_logo.png";

export default function Socials() {
  return (
    <div>
      <div className="text-white text-4xl mt-10 ">
        <h1>Let's connect!</h1>
      </div>
      <ul className="flex mt-10 gap-12 align-middle">
        <li>
          <a href="https://github.com/hardikroongta8">
            <img
              src={githubLogo}
              className="h-10 hover:scale-125 transition duration-75"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hardikroongta8">
            <img
              src={linkedInLogo}
              className="h-10 hover:scale-125 transition duration-75"
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/hardikroongta8">
            <img
              src={xLogo}
              className="h-9 hover:scale-125 transition duration-75"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hardikroongta8">
            <img
              src={igLogo}
              className="h-10 hover:scale-125 transition duration-75"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
