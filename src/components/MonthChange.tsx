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

function MonthChangeButton({
  arrow,
  month,
  year,
  setMonth,
  setYear,
  setDay,
}: {
  arrow: string;
  month: number;
  year: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setDay: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <button
      onClick={() => {
        if (arrow === "◀️") {
          if (month === 1) {
            setMonth(12);
            setYear(year - 1);
          } else {
            setMonth(month - 1);
          }
        } else if (arrow === "▶️") {
          if (month === 12) {
            setMonth(1);
            setYear(year + 1);
          } else {
            setMonth(month + 1);
          }
        }
        setDay(1);
      }}
    >
      {arrow}
    </button>
  );
}

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
      <MonthChangeButton
        arrow={"◀️"}
        {...{ month, year, setMonth, setYear, setDay }}
      />
      <YearMonthOutputBox>
        <span>{year}년</span>
        <span>{month}월</span>
      </YearMonthOutputBox>
      <MonthChangeButton
        arrow={"▶️"}
        {...{ month, year, setMonth, setYear, setDay }}
      />
    </MonthChangeBox>
  );
}
