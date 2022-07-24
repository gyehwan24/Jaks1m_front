import { naverJoin } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Naver() {
  const dispatch = useDispatch();
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  //state
  let state = new URL(window.location.href).searchParams.get("stae");

  let body = {
    code: code,
    state: state,
  };
  useEffect(() => {
    dispatch(naverJoin(body)).then((response) => {
      console.log(response);
      alert(response.payload.email);
      if (response.payload !== null) {
        alert("response 있음");
      }
    });
  }, []);

  return <h2> Naver code posting..</h2>;
}

export default Naver;
