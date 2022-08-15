import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  insertSchedule,
  getSchedule,
  removeSchedule,
} from "../_actions/scheduleAction";
import "./css/Schedule.css";
function Schedule() {
  const dispatch = useDispatch();
  const params = useParams();
  let click_day = params.date; //url에 붙은 date 변수
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const today = `${year}${month}${day}`;
  let inputDate = click_day === undefined ? today : click_day;
  const hourList = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  const minuteList = ["00", "10", "20", "30", "40", "50"];
  const [startHour, setStartHour] = useState("0");
  const [startMinute, setStartMinute] = useState("00");
  const [endHour, setEndHour] = useState("0");
  const [endMinute, setEndMinute] = useState("00");
  const [schedule, setSchedule] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [scheduleList, setScheduleList] = useState([
    {
      id: 1,
      isChecked: false,
      date: "20220815",
      time: "1500-1600",
      content: "코딩",
    },
  ]); //서버에서 받는 schedule list
  const handleStartHour = (e) => {
    setStartHour(e.target.value);
  };
  const handleStartMinute = (e) => {
    setStartMinute(e.target.value);
  };
  const handleEndHour = (e) => {
    setEndHour(e.target.value);
  };
  const handleEndMinute = (e) => {
    setEndMinute(e.target.value);
  };
  const handleInputSchedule = (e) => {
    e.preventDefault();
    setSchedule(e.target.value);
  };
  const handleSubmitSchedule = (e) => {
    e.preventDefault();
    if (schedule === "") {
      alert("입력하지 않은 칸이 있습니다.");
      return;
    }
    let inputTime = `${startHour.padStart(
      2,
      "0"
    )}${startMinute}-${endHour.padStart(2, "0")}${endMinute}`;

    let inputSchedule = {
      time: inputTime,
      content: schedule,
      isChecked: false,
    };
    setSchedules((currentArray) => [...currentArray, inputSchedule]);
    dispatch(insertSchedule(inputSchedule, inputDate)).then((response) => {
      console.log(response);
    });
    dispatch(getSchedule(inputDate)).then((response) => {
      console.log(response);
      setScheduleList(response.payload.schedules);
    });
    setSchedule("");
  };
  const handleRemoveSchedule = (id) => {
    dispatch(removeSchedule(id)).then((response) => {
      setSchedules(response.payload.schedules);
    });
  };
  useEffect(() => {
    if (click_day === undefined) {
      dispatch(getSchedule(inputDate)).then((response) => {
        setScheduleList(response.payload.schedules);
      });
    } else {
      dispatch(getSchedule(click_day)).then((response) => {
        setScheduleList(response.payload.schedules);
      });
    }
  }, [schedules, click_day]);

  const nowHour = now.getHours();
  const nowMinute = now.getMinutes();
  //지금 스케줄인지 판단하는 함수
  const isNowSchedule = (schedule) => {
    if (today !== schedule.date) return false;
    const schedule_startHour = schedule.time.slice(0, 2);
    const schedule_startMinute = schedule.time.slice(2, 4);
    const schedule_endHour = schedule.time.slice(5, 7);
    const schedule_endMinute = schedule.time.slice(7);
    if (schedule_startHour <= nowHour && schedule_startMinute <= nowMinute) {
      if (schedule_endHour >= nowHour && schedule_endMinute >= nowMinute) {
        return true;
      } else {
        return false;
      }
    }
  };
  //지난 스케줄인지 판단하는 함수
  const isDoneSchedule = (schedule) => {
    if (today < schedule.date) return false;
    const schedule_endHour = schedule.time.slice(5, 7);
    const schedule_endMinute = schedule.time.slice(7);
    if (schedule_endHour <= nowHour && schedule_endMinute <= nowMinute) {
      return true;
    } else {
      return false;
    }
  };
  const convertPrettyTime = (time) => {
    const schedule_startHour = time.slice(0, 2);
    const schedule_startMinute = time.slice(2, 4);
    const schedule_endHour = time.slice(5, 7);
    const schedule_endMinute = time.slice(7);
    return `${schedule_startHour}:${schedule_startMinute}-${schedule_endHour}:${schedule_endMinute}`;
  };
  return (
    <div>
      <h3 className="title">My Schedule</h3>
      <form onSubmit={handleSubmitSchedule} className="scheduleForm">
        시작:
        <select onChange={handleStartHour} className="timeSelect">
          {hourList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={handleStartMinute} className="timeSelect">
          {minuteList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        종료:
        <select onChange={handleEndHour} className="timeSelect">
          {hourList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={handleEndMinute} className="timeSelect">
          {minuteList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          onChange={handleInputSchedule}
          type="text"
          value={schedule}
          placeholder="스케줄을 입력하세요"
          className="scheduleInput"
        />
        <button type="submit" className="scheduleBtn">
          ➕
        </button>
      </form>
      <ul>
        {scheduleList &&
          scheduleList.map((item) => (
            <li
              key={item._id}
              className={
                isNowSchedule(item) ? "now_scheduleList" : "scheduleList"
              }
            >
              <span className={isNowSchedule(item) ? "now_time" : "time"}>
                {convertPrettyTime(item.time)}
              </span>
              <span
                className={
                  isNowSchedule(item)
                    ? "now_content"
                    : isDoneSchedule(item)
                    ? "done_content"
                    : "content"
                }
              >
                {item.content}
              </span>
              <button
                onClick={() => handleRemoveSchedule(item._id)}
                className="scheduleBtn"
              >
                ❌
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Schedule;
