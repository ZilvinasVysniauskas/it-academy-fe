import * as moment from "moment";

export function dateToString(date: moment.Moment): string {
  return date.format('YYYY-MM-DD');
}
