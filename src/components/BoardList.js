import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCommunity } from "../_actions/community";
import { Link } from "react-router-dom";
function BoardList() {
  const dispatch = useDispatch();
  let board_type = new URL(window.location.href).searchParams.get("category");
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    dispatch(getCommunity(board_type)).then((response) => {
      console.log(response);
      setArticles(response.payload.postings);
    });
  }, []);
  let url = `posting/?category=${board_type}`;

  return (
    <div>
      <button>
        <Link to={url}>글쓰기</Link>
      </button>

      <ul>
        {articles &&
          articles.map((item) => (
            <li key={item._id}>
              <p>
                <Link to={`/community/category/id?id=${item._id}`}>
                  {item.title}/ {item.desc}/ 작성자: {item.userId.name}
                </Link>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default BoardList;
