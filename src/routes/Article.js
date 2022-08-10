import { getArticle } from "../_actions/community";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Comment, Avatar, List } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        댓글 작성
      </Button>
    </Form.Item>
  </>
);

function Article() {
  const dispatch = useDispatch();
  let id = new URL(window.location.href).searchParams.get("id");
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const profileImg = localStorage.getItem("USER_PROFILE");
  const userName = localStorage.getItem("USER_NAME");
  useEffect(() => {
    dispatch(getArticle(id)).then((response) => {
      setArticles(response.payload.posting);
      console.log(response);
    });
  }, []);
  const handleSubmitComment = (value) => {
    console.log(value);
  };
  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: userName,
          avatar: profileImg,
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p>{articles.title}</p>
      <p>{articles.createdAt}</p>
      <p>{articles.desc}</p>
      {articles.image !== "" ? <img src={articles.image} /> : null}
      {/* <Form
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
        onFinish={handleSubmitComment}
        autoComplete="off"
      >
        <Form.Item
          label="댓글"
          name="comment"
          rules={[
            {
              required: true,
              message: "댓글을 작성하세요!",
            },
          ]}
        >
          <Input.TextArea size="small" placeholder="댓글을 작성하세요" />
        </Form.Item>
        <Form.Item
          name="anonymous"
          valuePropName="checked"
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
        >
          <Checkbox>익명</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            댓글 쓰기
          </Button>
        </Form.Item>
      </Form> */}
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={<Avatar src={profileImg} alt={userName} />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </div>
  );
}

export default Article;
