import { useEffect, useState } from "react";
import Year from "react-live-clock";
import Month from "react-live-clock";
import { useDispatch } from "react-redux";
import { getDateToDo } from "../_actions/todoAction";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./css/Calendar.css";
function Calendar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const click_date = params.date;
  console.log(click_date);
  const now = new Date();
  const [today, setToday] = useState(now.getDate()); //오늘 날짜
  //이달의 마지막 날짜
  const [lastday, setLastday] = useState(
    new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  );
  const [daylist, setDaylist] = useState([]); //표시할 날짜 리스트

  const onClickDayList = (date) => {
    // setToday(date);
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(date).padStart(2, "0");
    let inputDate = `${year}${month}${day}`;
    dispatch(getDateToDo(inputDate)).then((response) => console.log(response));
    navigate(`/category/mystudy/${inputDate}`);
  };

  useEffect(() => {
    setDaylist([]); //계산하기 전에 리스트 초기화.
    let dates = [];
    let dayofweek = []; //요일 배열
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let firstDay = today - 4;
    dates[0] = firstDay;
    for (let i = 0; i <= today + 3; i++) {
      dates[i] = firstDay + i;
      dayofweek[i] = week[dates[i] % 7];
      let inputDayList = {
        date: dates[i],
        dayOfWeek: dayofweek[i],
      };
      setDaylist((currentArray) => [...currentArray, inputDayList]);
    }
  }, [today]); //today가 바뀔때만 리스트 계산
  // useEffect(() => {
  //   setToday(click_date);
  // }, [click_date]);
  return (
    <div>
      <p className="year_month">
        <span>
          <Year format={"YYYY"} ticking={true} />년
        </span>
        <span> </span>
        <span>
          <Month format={"M"} ticking={true} />월
        </span>
      </p>
      <ul className="dayList">
        {daylist.map((item) => (
          <button
            onClick={() => onClickDayList(item.date)}
            className={today === item.date ? "todayBtn" : "dayBtn"}
          >
            <li
              key={item.date}
              className={today > item.date ? "before_date" : "date"}
            >
              {item.date}
            </li>
            <li key={item.dayOfWeek} className="dayOfWeek">
              {item.dayOfWeek}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
