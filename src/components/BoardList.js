import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCommunity } from "../_actions/community";

function BoardList() {
  const dispatch = useDispatch();
  let board_type = new URL(window.location.href).searchParams.get("category");
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    dispatch(getCommunity(board_type)).then((response) => {
      console.log(response);
      setArticles(response.payload.posting);
    });
  }, []);
  return (
    <div>
      <ul>
        {articles &&
          articles.map((item) => (
            <li key={item._id}>
              <p>
                {item.title}
                {item.category}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default BoardList;
