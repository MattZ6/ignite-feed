import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export function formateRelativeDime(date: Date) {
  return formatDistanceToNow(date, {
    addSuffix: true
  });
}
