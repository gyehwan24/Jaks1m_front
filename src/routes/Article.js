import { getArticle, postComment } from "../_actions/community";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Comment, Avatar, List } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} 댓글`}
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
  //   const [commentList, setCommentList] = useState([]);
  const profileImg = localStorage.getItem("USER_PROFILE");
  const userName = localStorage.getItem("USER_NAME");
  useEffect(() => {
    dispatch(getArticle(id)).then((response) => {
      setArticles(response.payload.posting);
      console.log(response);
      setComments(response.payload.posting.comments);
    });
  }, [comments]);
  const handleSubmitComment = (value) => {
    console.log(value);
  };
  const handleSubmit = () => {
    if (!value) return; //댓글내용 없으면 포스트X
    setSubmitting(true);
    dispatch(postComment(id, value)).then((response) => {
      console.log(response);
      setComments(response.payload.posting.comments);
    });
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      //   setComments([
      //     ...comments,
      //     {
      //       author: userName,
      //       avatar: profileImg,
      //       content: <p>{value}</p>,
      //       datetime: moment().fromNow(),
      //     },
      //   ]);
    }, 1000);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p>
        제목: {articles.title} 작성일자:
        {new Date(articles.createdAt).toLocaleString()}
      </p>
      <p>{articles.desc}</p>
      {articles.image !== "" ? (
        <img
          src={articles.image}
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
      ) : null}

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
