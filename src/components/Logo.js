import { Link } from "react-router-dom";
import logo from "../img/jaks1m_logo.jpeg";
function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} style={{ width: "150px", height: "150px" }} />
      </Link>
    </div>
  );
}

export default Logo;
