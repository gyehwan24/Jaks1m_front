import BoardList from "../components/BoardList";
import Header from "../components/Header";

function Board() {
  return (
    <div>
      {/* 글 목록을 불러온다. */}
      <BoardList />
      <Header />
    </div>
  );
}

export default Board;
