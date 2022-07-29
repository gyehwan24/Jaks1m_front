import { Link } from "react-router-dom";
import ImgUploader from "./ImgUploader";
function Profile(prop) {
  return (
    <div>
      <Link to="/profile">
        <img src="img/profile.png" />
      </Link>
    </div>
  );
}

export default Profile;
