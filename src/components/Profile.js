import { Link } from "react-router-dom";
import ImgUploader from "./ImgUploader";
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
              marginTop: "8px",
              marginRight: "5px",
            }}
          />
        ) : (
          <img
            src="img/profile_icon.png"
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
