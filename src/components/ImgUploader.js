import { useState } from "react";
import { useEffect } from "react-dom";
import { imageUpload } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import profileImg_default from "../img/profile_icon.png";
function ImageUploader() {
  const profileImg = localStorage.getItem("USER_PROFILE");
  let previewImg = profileImg_default;
  if (profileImg) previewImg = profileImg; //사용자가 프로필을 설정했었다면 그 이미지로 설정.
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: previewImg,
  });
  let inputRef;
  const dispatch = useDispatch();

  //이미지 업로드 버튼
  const saveImage = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();
    if (event.target.files[0]) {
      fileReader.readAsDataURL(event.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: event.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };

  //이미지 지우는 버튼
  const deleteImage = (event) => {
    event.preventDefault();
    setImage({
      image_file: "",
      preview_URL: "img/profile_icon.png",
    });
  };
  //이미지 서버에 업로드.
  const uploadImage = (event) => {
    event.preventDefault();
    if (image.image_file) {
      const formData = new FormData();
      formData.append("image", image.image_file);
      dispatch(imageUpload(formData)).then((response) => {
        console.log(response);
        alert("사진이 업로드 되었습니다!");
        localStorage.setItem("USER_PROFILE", response.payload.updatedImg);
      });
    } else {
      alert("사진을 등록하세요!");
    }
  };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        onClick={(event) => (event.target.value = null)}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />
      <div
        className="img-wrapper"
        style={{
          border: "1px solid black",
          width: "200px",
          height: "200px",
        }}
      >
        <img
          src={image.preview_URL}
          style={{ width: "200px", height: "200px" }}
        />
      </div>

      <div className="upload-button">
        <Button
          type="primary"
          variant="contained"
          onClick={() => inputRef.click()}
        >
          선택
        </Button>
        <Button color="error" variant="contained" onClick={deleteImage}>
          삭제
        </Button>
        <Button color="success" variant="contained" onClick={uploadImage}>
          업로드
        </Button>
      </div>
    </div>
  );
}

export default ImageUploader;
