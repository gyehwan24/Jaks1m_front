//프로필 설정 페이지.
import React, { useState } from "react";
import ImageUploader from "../components/ImgUploader";
import Header from "../components/Header";
function ProfilePage() {
  return (
    <div>
      <Header />
      <h2>프로필설정 </h2>
      <ImageUploader />
    </div>
  );
}

export default ProfilePage;
