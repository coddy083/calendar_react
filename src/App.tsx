import "./App.css";
import { useEffect, useState } from "react";
import { workList } from "./data/works";
import createCalendar from "./util/createCalendar";
import MonthChange from "./components/MonthChange";

//근무표 리스트
//날짜 변경이 박스 변수

function App() {
  const [calendar, setCalendar] = useState<string[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [day, setDay] = useState<number>(new Date().getDate());

  // 사용 예시:
  useEffect(() => {
    createCalendar(year, month, setCalendar);
  }, [year, month]);

  return (
    <>
      {/* {year}년 {month}월 {day}일 */}
      <MonthChange
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
        setDay={setDay}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
        {calendar.map((date, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              textAlign: "center",
              backgroundColor: day === parseInt(date) ? "blue" : "#000",
              transition: "1s",
            }}
            onClick={() => {
              // day가 NaN이면 스테이트를 변경하지 않는다
              // day가 NaN이 아니면 스테이트를 변경한다.
              isNaN(parseInt(date))
                ? setDay(day)
                : setDay(new Date(year, month - 1, parseInt(date)).getDate());
            }}
          >
            <div>
              <div>{date}</div>
              <div>
                {workList.map((work) => {
                  if (
                    work.date ===
                    `${year}-${month < 10 ? `0${month}` : month}-${
                      date.length === 1 ? `0${date}` : date
                    }`
                  ) {
                    return (
                      <div
                        style={{
                          backgroundColor:
                            work.work === "D" ? "#FFB4B4" : "#B2A4FF",
                        }}
                      >
                        {work.work}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4>오늘의 할일</h4>
        {/* 날짜에 맞는 message가 있을경우 표시한다 */}
        {workList.map((work) => {
          if (
            work.date ===
            `${year}-${month < 10 ? `0${month}` : month}-${
              day < 10 ? `0${day}` : day
            }`
          ) {
            return (
              <>
                <div>
                  {work.message ? (
                    <div>
                      <>
                        {work.message.map((message) => (
                          <li>{message}</li>
                        ))}
                      </>
                    </div>
                  ) : (
                    <div>할일이 없습니다.</div>
                  )}
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
