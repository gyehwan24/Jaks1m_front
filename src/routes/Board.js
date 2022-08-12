import BoardList from "../components/BoardList";
import Header from "../components/Header";

function Board() {
  let board_type = new URL(window.location.href).searchParams.get("category");

  return (
    <div>
      {/* 글 목록을 불러온다. */}
      <BoardList />
      <Header />
    </div>
  );
}

export default Board;
