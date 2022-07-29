//프로필 설정 페이지.
import React, { useState } from "react";
import ImageUploader from "../components/ImgUploader";

function ProfilePage() {
  return (
    <div>
      <h2>프로필설정 </h2>
      <ImageUploader />
      {/* <input type="file" accept="image/*" /> */}
    </div>
  );
}

export default ProfilePage;
