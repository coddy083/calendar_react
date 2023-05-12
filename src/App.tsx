import { useEffect, useState } from "react";
import "./App.css";

//근무표 리스트
const workList = [
  {
    date: "2023-05-01",
    work: "D",
    message: ["이브닝 이하은", "물품 주문해야 합니다."],
  },
  {
    date: "2023-05-02",
    work: "D",
    message: ["이브닝 이하영", "대청소 날 입니다."],
  },
  {
    date: "2023-05-03",
    work: "E",
    message: ["데이 이하율", "2시에 교육이 있습니다."],
  },
  {
    date: "2023-05-04",
    work: "D",
    message: ["이브닝 이민기", "4시에 회식이 있습니다."],
  },
  {
    date: "2023-05-05",
    work: "E",
  },
  {
    date: "2023-05-06",
    work: "E",
  },
  {
    date: "2023-05-07",
    work: "D",
  },
  {
    date: "2023-05-08",
    work: "D",
  },
  {
    date: "2023-05-09",
    work: "E",
  },
  {
    date: "2023-05-10",
    work: "D",
  },
  {
    date: "2023-05-11",
    work: "E",
  },
  {
    date: "2023-05-12",
    work: "E",
  },
  {
    date: "2023-05-13",
    work: "E",
  },
  {
    date: "2023-05-14",
    work: "D",
  },
  {
    date: "2023-05-15",
    work: "E",
  },
  {
    date: "2023-05-16",
    work: "E",
  },
  {
    date: "2023-05-17",
    work: "E",
  },
  {
    date: "2023-05-18",
    work: "E",
  },
  {
    date: "2023-05-19",
    work: "D",
  },
  {
    date: "2023-05-20",
    work: "E",
  },
  {
    date: "2023-05-21",
    work: "E",
  },
  {
    date: "2023-05-22",
    work: "E",
  },
  {
    date: "2023-05-23",
    work: "E",
  },
  {
    date: "2023-05-24",
    work: "E",
  },
  {
    date: "2023-05-25",
    work: "E",
  },
  {
    date: "2023-05-26",
    work: "E",
  },
  {
    date: "2023-05-27",
    work: "E",
  },
  {
    date: "2023-05-28",
    work: "E",
  },
  {
    date: "2023-05-29",
    work: "E",
  },
  {
    date: "2023-05-30",
    work: "E",
  },
  {
    date: "2023-05-31",
    work: "E",
  },
];

function App() {
  const [calendar, setCalendar] = useState<string[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [day, setDay] = useState<number>(new Date().getDate());
  function printCalendar(year: number, month: number) {
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

    // 해당 월의 첫째날과 마지막날을 계산
    // -1을 하는 이유는 0부터 시작하기 때문이다.
    // 1을 빼면 전 달의 마지막 날이 나온다.
    // 0을 넣으면 전 달의 마지막 날이 나온다.
    // 1을 넣으면 해당 달의 마지막 날이 나온다.
    const firstDayOfMonth = new Date(year, month - 1, 1);
    // 0을 넣으면 전 달의 마지막 날이 나온다.
    const lastDayOfMonth = new Date(year, month, 0);
    console.log(
      "월의 첫째날",
      firstDayOfMonth,
      "월의 마지막날",
      //한국시간으로 나옴
      lastDayOfMonth
    );

    // 첫째날의 요일(0-일, 1-월, 2-화, ...)을 계산
    const firstWeekday = firstDayOfMonth.getDay();

    // 달력 출력
    console.log(`${year}년 ${month}월`);

    const calendarRows: string[] = [];

    for (let i = 0; i < weekdays.length; i++) {
      calendarRows.push(`${weekdays[i]}`);
    }

    let date = 1; // 출력할 날짜
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstWeekday) || date > lastDayOfMonth.getDate()) {
          // 이전 달과 다음 달의 날짜를 공백으로 출력
          calendarRows.push("");
        } else {
          // 해당 월의 날짜를 출력
          calendarRows.push(date.toString());
          date++;
        }
      }

      if (date > lastDayOfMonth.getDate()) {
        break;
      }
    }
    setCalendar(calendarRows);
  }

  // 사용 예시:
  useEffect(() => {
    printCalendar(year, month);
  }, [year, month]);

  return (
    <>
      {/* {year}년 {month}월 {day}일 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <button
          onClick={() =>
            //만약 month가 1이면 12로 바꾸고 year를 -1 해준다.
            //month가 1이 아니면 month를 -1 해준다.
            //month가 바뀌면 day를 1로 초기화 한다
            // month === 1
            //   ? (setMonth(12), setYear(year - 1))
            //   : setMonth(month - 1)
            month === 1
              ? (setMonth(12), setYear(year - 1), setDay(1))
              : (setMonth(month - 1), setDay(1))
          }
        >
          ◀️
        </button>
        <div
          style={{
            display: "flex",
            margin: 10,
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          <span>{year}년</span>
          <span>{month}월</span>
        </div>
        <button
          onClick={() =>
            // 만약 month가 12이면 1로 바꾸고 year를 +1 해준다.
            // month가 12가 아니면 month를 +1 해준다.
            month === 12
              ? (setMonth(1), setYear(year + 1), setDay(1))
              : (setMonth(month + 1), setDay(1))
          }
        >
          ▶️
        </button>
      </div>
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
