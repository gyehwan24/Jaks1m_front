//글쓰기 버튼을 눌렀을때 사용할 컴포넌트
import { Form, Input, Button, Checkbox } from "antd";
import { postArticle } from "../_actions/community";
import { useDispatch } from "react-redux";
function PostArticle() {
  const dispatch = useDispatch();
  let board_type = new URL(window.location.href).searchParams.get("category");
  const onFinish = (value) => {
    let body = {
      image: null,
      title: value.title,
      desc: value.desc,
      category: board_type,
    };
    console.log(body);
    dispatch(postArticle(body)).then((response) => {
      console.log(response);
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
