import { useState } from "react";
import { useEffect } from "react-dom";
// import { Button } from "@mui/material";
function ImageUploader() {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/profile.png",
  });
  let inputRef;
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
  return (
    <div>
      <h3>이미지업로더</h3>
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        onClick={(event) => (event.target.value = null)}
        ref={(refParam) => (inputRef = refParam)}
        // style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img src={image.preview_URL} />
      </div>
      <div className="upload-button">
        {/* <Button
          type="primary"
          variant="contained"
          onClick={() => inputRef.click()}
        >
          Preview
        </Button>
        <Button color="error" variant="contained" onClick={deleteImage}>
          Delete
        </Button>
        <Button color="success" variant="contained" onClick={sendImageToServer}>
          Upload
        </Button> */}
      </div>
    </div>
  );
}

export default ImageUploader;
