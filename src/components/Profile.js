import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Link to="/profile">
        <img src="img/profile.png" />
      </Link>
    </div>
  );
}

export default Profile;
