import { format, formatDistanceToNow } from "date-fns";
import { it } from "date-fns/locale";

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'at' HH'h'mm", {
    locale: it,
  });
}

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    locale: it,
    addSuffix: true,
  });
}
