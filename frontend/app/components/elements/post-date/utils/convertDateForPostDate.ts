import { getPolandMonthNameByMonthNumber } from 'app/utils/date/getPolandMonthNameByMonthNumber';

export function convertDateForPostDate(date: Date): string {
  const monthIndex: number = date.getMonth();
  const monthName: string = getPolandMonthNameByMonthNumber(monthIndex);
  const day: number = date.getDate();
  const year: number = date.getFullYear();

  return `${ monthName } ${ day }, ${ year }`;
}
