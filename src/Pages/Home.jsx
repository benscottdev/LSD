import Nav from "../Components/Nav";
import Transition from "../Components/Transition";
import lsdStudiosWebLogo from "../Assets/LSD_WEBLOGO.png";
import githubLogo from "../Assets/github.png";

function Home({ lightMode }) {
  return (
    <div className={lightMode}>
      <Nav />
      <div className="homePage">
        <img className="logoSvg" src={lsdStudiosWebLogo} alt="weblogo" />
      </div>
      <a href="https://github.com/benscottdev" target="_blank" rel="noreferrer">
        <img src={githubLogo} alt="github link" className="githubLogo" />
      </a>
    </div>
  );
}
export default Transition(Home);
