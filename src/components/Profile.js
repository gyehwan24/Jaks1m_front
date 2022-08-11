import { Link } from "react-router-dom";
import ImgUploader from "./ImgUploader";
import profile_default from "../img/profile_icon.png";
function Profile(prop) {
  const profileImg = localStorage.getItem("USER_PROFILE");
  return (
    <div>
      <Link to="/profile">
        {profileImg !== null ? (
          <img
            src={profileImg}
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "70%",
              marginTop: "12px",
              marginRight: "10px",
            }}
          />
        ) : (
          <img
            src={profile_default}
            style={{
              width: "32px",
              heigth: "32px",
              marginTop: "16px",
              marginRight: "9px",
            }}
          />
        )}
      </Link>
    </div>
  );
}

export default Profile;
