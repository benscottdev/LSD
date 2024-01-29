import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navLinks">
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/work">
        Work
      </Link>
      <Link className="link" to="/create">
        Create
      </Link>
    </div>
  );
}
export default Nav;
