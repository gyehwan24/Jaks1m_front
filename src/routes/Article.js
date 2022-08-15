import { getArticle, postComment, getComment } from "../_actions/community";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Comment,
  Avatar,
  List,
  Card,
} from "antd";
import "antd/dist/antd.min.css";

import moment from "moment";
import "moment/locale/ko";
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
  const [commentList, setCommentList] = useState([]);

  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const profileImg = localStorage.getItem("USER_PROFILE");
  const userName = localStorage.getItem("USER_NAME");
  const [writerName, setWriterName] = useState("");
  useEffect(() => {
    dispatch(getArticle(id)).then((response) => {
      console.log(response);
      setArticles(response.payload.posting);
      setWriterName(response.payload.posting.userId.name);
      setCommentList(response.payload.posting.comments);
      // setCommentList([
      //   {
      //     author: response.payload.posting.comments.userId.name,
      //     avatar: response.payload.posting.comments.userId.img,
      //     content: <p>{response.payload.posting.comments.desc}</p>,
      //     datetime: moment(
      //       response.payload.posting.comments.createdAt
      //     ).fromNow(),
      //   },
      // ]);
    });
  }, [comments]);

  const handleSubmit = () => {
    if (!value) return; //댓글내용 없으면 포스트X
    setSubmitting(true);
    let desc = {
      desc: value,
    };
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      dispatch(postComment(id, desc)).then((response) => {
        console.log(response);
        setComments([
          ...comments,
          {
            author: userName,
            avatar: profileImg,
            content: <p>{value}</p>,
            datetime: moment().fromNow(),
          },
        ]);
      });
    }, 500);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Card>
        <Card type="inner" title={articles.title}>
          <p>{articles.desc}</p>
          <p>
            {articles.image !== "" ? (
              <img
                src={articles.image}
                style={{ maxWidth: "400px", maxHeight: "400px" }}
              />
            ) : null}
          </p>
          <p>
            작성자: {writerName} (
            {new Date(articles.createdAt).toLocaleString()})
          </p>
        </Card>
      </Card>
      {/* <p>
        제목: {articles.title}/ 작성일자:
        {new Date(articles.createdAt).toLocaleString()}
      </p>
      <p>내용: {articles.desc}</p>
      {articles.image !== "" ? (
        <img
          src={articles.image}
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
      ) : null} */}
      <ul>
        {commentList.map((item) => (
          <li key={item._id}>
            <span>
              {item.userId.name}: {item.desc} / (
              {new Date(item.createdAt).toLocaleString()})
            </span>
          </li>
        ))}
      </ul>

      {/* {comments.length > 0 && <CommentList comments={commentList} />} */}
      {/* {comments.length > 0 && <CommentList comments={comments} />} */}
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
