//글쓰기 버튼을 눌렀을때 사용할 컴포넌트
import { Form, Input, Button, Checkbox } from "antd";
import { postArticle } from "../_actions/community";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import profile_default from "../img/profile_icon.png";
import BoardLayout from "../components/BoardLayout";
function PostArticle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = localStorage.getItem("USER_NAME");
  let profileImg = localStorage.getItem("USER_PROFILE");
  if (profileImg === null) profileImg = profile_default;
  let board_type = new URL(window.location.href).searchParams.get("category");
  let board_name = "";
  switch (board_type) {
    case "freeboard":
      board_name = "자유게시판";
      break;
    case "questionboard":
      board_name = "질문게시판";
      break;
    case "tipboard":
      board_name = "팁게시판";
      break;
  }
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
    const formData = new FormData();
    if (image.image_file) {
      formData.append("image", image.image_file);
    } else {
      formData.append("image", null);
    }
    formData.append("title", value.title);
    formData.append("desc", value.desc);
    formData.append("category", board_type);
    formData.append("anonymous", value.anonymous === undefined ? false : true);
    dispatch(postArticle(formData)).then((response) => {
      console.log(response);
      if (response.payload.success === true) {
        alert("글 작성이 완료되었습니다!");
        navigate(`/community/category?category=${board_type}`);
      }
    });
  };
  const onClickCancelBtn = () => {
    navigate(`/community/category?category=${board_type}`);
  };
  return (
    <div>
      <BoardLayout />
      <Header />
      <div style={{ position: "absolute", top: "290px", left: "4px" }}>
        <PostForm
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
            label="내용"
            name="desc"
            rules={[
              {
                required: true,
                message: "내용을 입력하세요!",
              },
            ]}
          >
            <Input.TextArea
              rows={10}
              showCount
              size="middle"
              placeholder="내용을 입력하세요"
            />
          </Form.Item>

          <Form.Item
            name="anonymous"
            valuePropName="checked"
            style={{ width: "100px", marginLeft: "51px" }}
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
              offset: 3,
              span: 16,
            }}
          >
            <PostBtn type="primary" htmlType="submit">
              등록
            </PostBtn>
          </Form.Item>
          <CancelBtn onClick={onClickCancelBtn}>취소</CancelBtn>
        </PostForm>
      </div>
    </div>
  );
}
export default PostArticle;

const PostForm = styled(Form)`
  position: absolute;
  top: 60px;
  left: 320px;
  width: 1050px;
`;
const PostBtn = styled(Button)`
  position: absolute;
  top: -90px;
  left: 220px;
  width: 159px;
  height: 52px;
  background: rgba(0, 0, 0, 0.8);
  border: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
const CancelBtn = styled(Button)`
  position: absolute;
  top: 318px;
  left: 530px;
  width: 159px;
  height: 52px;
  background: rgba(255, 255, 255, 0.8);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
