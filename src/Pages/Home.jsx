import Nav from "../Components/Nav";
import Transition from "../Components/Transition";

function Home() {
  return (
    <div>
      <Nav />

      <div className="homePage">
        <h1>LSD STUDIOS</h1>
      </div>
    </div>
  );
}
export default Transition(Home);
