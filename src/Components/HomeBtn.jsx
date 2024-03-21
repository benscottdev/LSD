import { Link } from "react-router-dom";

function HomeBtn() {
  return (
    <div className="homeBtn">
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
  );
}
export default HomeBtn;
