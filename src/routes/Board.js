import BoardList from "../components/BoardList";

function Board() {
  let board_type = new URL(window.location.href).searchParams.get("category");
  return (
    <div>
      <h1>게시판_{board_type}</h1>
      {/* 글 목록을 불러온다. */}
      <BoardList />
    </div>
  );
}

export default Board;
