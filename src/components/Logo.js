import { Link } from "react-router-dom";
function Logo() {
  return (
    <div>
      <Link to="/">
        <img
          className="logo"
          src="img/jaks1m_logo.jpeg"
          style={{ width: "150px", height: "150px" }}
        />
      </Link>
    </div>
  );
}

export default Logo;
