export default function createCalendar(
  year: number,
  month: number,
  setCalendar: React.Dispatch<React.SetStateAction<string[]>>
) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

  // 해당 월의 첫째날과 마지막날을 계산
  // -1을 하는 이유는 0부터 시작하기 때문이다.
  // 1을 빼면 전 달의 마지막 날이 나온다.
  // 0을 넣으면 전 달의 마지막 날이 나온다.
  // 1을 넣으면 해당 달의 마지막 날이 나온다.
  const firstDayOfMonth = new Date(year, month - 1, 1);
  // 0을 넣으면 전 달의 마지막 날이 나온다.
  const lastDayOfMonth = new Date(year, month, 0);

  // 첫째날의 요일(0-일, 1-월, 2-화, ...)을 계산
  const firstWeekday = firstDayOfMonth.getDay();

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
