//styled
import styled from "styled-components";

export const MonthChangeBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const YearMonthOutputBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
`;

export default function MonthChange({
  month,
  setMonth,
  year,
  setYear,
  setDay,
}: {
  month: number;
  year: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setDay: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <MonthChangeBox>
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
      <YearMonthOutputBox>
        <span>{year}년</span>
        <span>{month}월</span>
      </YearMonthOutputBox>
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
    </MonthChangeBox>
  );
}
