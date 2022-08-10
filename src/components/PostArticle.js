//글쓰기 버튼을 눌렀을때 사용할 컴포넌트
import { Form, Input, Button, Checkbox } from "antd";
import { postArticle } from "../_actions/community";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function PostArticle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let board_type = new URL(window.location.href).searchParams.get("category");
  //이미지 업로드
  let previewImg = "img/profile_icon.png"; //프리뷰 이미지 기본값.
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: previewImg,
  });
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
  //글 작성 서버로 보내기
  const onFinish = (value) => {
    if (image.image_file) {
      const formData = new FormData();
      formData.append("image", image.image_file);
    }
    let body = {
      title: value.title,
      desc: value.desc,
      image: formData,
      category: board_type,
      anonymous: value.anonymous,
    };
    console.log(body);
    dispatch(postArticle(body)).then((response) => {
      console.log(response);
      if (response.payload.success === true) {
        alert("글 작성이 완료되었습니다!");
        navigate(`/community/category?category=${board_type}`);
      }
    });
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 80,
        }}
        wrapperCol={{
          span: 160,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="제목"
          name="title"
          rules={[
            {
              required: true,
              message: "제목을 입력하세요!",
            },
          ]}
        >
          <Input.TextArea size="small" placeholder="제목을 입력하세요" />
        </Form.Item>

        <Form.Item
          label="글 내용"
          name="desc"
          rules={[
            {
              required: true,
              message: "내용을 입력하세요!",
            },
          ]}
        >
          <Input.TextArea
            rows={15}
            showCount
            size="large"
            placeholder="내용을 입력하세요"
          />
        </Form.Item>

        <Form.Item
          name="anonymous"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>익명</Checkbox>
        </Form.Item>
        <input
          type="file"
          accept="image/*"
          onChange={saveImage}
          onClick={(event) => (event.target.value = null)}
        />
        {image.image_file !== "" ? (
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
        ) : null}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            글 쓰기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default PostArticle;
