import Nav from "../Components/Nav";
import Transition from "../Components/Transition";
import lsdStudiosWebLogo from "../Assets/LSD_WEBLOGO.png";

function Home() {
  return (
    <div>
      <Nav />
      <div className="homePage">
        <img className="logoSvg" src={lsdStudiosWebLogo} alt="weblogo" />
      </div>
    </div>
  );
}
export default Transition(Home);
