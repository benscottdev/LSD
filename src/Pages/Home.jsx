import Nav from "../Components/Nav";
import Transition from "../Components/Transition";
import lsdStudiosWebLogo from "../Assets/LSDSTUDIOS_WEBLOGO2.svg";

function Home() {
  return (
    <div>
      <Nav />

      <div className="homePage">
        <img src={lsdStudiosWebLogo} alt="weblogo" />
      </div>
    </div>
  );
}
export default Transition(Home);
