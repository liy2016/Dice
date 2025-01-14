/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
const DATE_FORMAT = 'YYYY-MM-DD ';
const TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export function formatToTimestamp(
  date: moment.MomentInput = undefined,
  format = TIMESTAMP_FORMAT
): string {
  return moment(date).format(format);
}

export function formatToDateTime(
  date: moment.MomentInput = undefined,
  format = DATE_TIME_FORMAT
): string {
  return moment(date).format(format);
}

export function formatToDate(date: moment.MomentInput = undefined, format = DATE_FORMAT): string {
  return moment(date).format(format);
}

export const dateUtil = moment;
