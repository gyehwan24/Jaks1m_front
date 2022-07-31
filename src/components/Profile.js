import { Link } from "react-router-dom";
import ImgUploader from "./ImgUploader";
function Profile(prop) {
  const profileImg = localStorage.getItem("IMG_PROFILE");
  return (
    <div>
      <Link to="/profile">
        {profileImg !== null ? (
          <img src={profileImg} style={{ width: "50px", height: "50px" }} />
        ) : (
          <img
            src="img/profile_icon.png"
            style={{ width: "32px", heigth: "32px" }}
          />
        )}
      </Link>
    </div>
  );
}

export default Profile;
