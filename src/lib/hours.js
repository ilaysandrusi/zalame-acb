const DAY_HE = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
const DAY_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function parseHm(hm) {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
}

export function jerusalemNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jerusalem",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    day: map[weekday] ?? date.getDay(),
    minutes:
      Number(parts.find((p) => p.type === "hour")?.value) * 60 +
      Number(parts.find((p) => p.type === "minute")?.value),
  };
}

function intervalFor(daySpec, dayIndex) {
  const open = parseHm(daySpec.open);
  let close = parseHm(daySpec.close);
  if (close <= open) close += 24 * 60;
  return { dayIndex, open, close };
}

export function getOpenStatus(hours, date = new Date()) {
  const now = jerusalemNow(date);
  const today = hours.find((h) => h.day === now.day);
  const yesterday = hours.find((h) => h.day === (now.day + 6) % 7);

  const windows = [];
  if (today) windows.push(intervalFor(today, now.day));
  if (yesterday) {
    const y = intervalFor(yesterday, (now.day + 6) % 7);
    if (y.close > 24 * 60) windows.push({ ...y, open: 0, close: y.close - 24 * 60, overnight: true });
  }

  const currentMinutes = now.minutes;
  const isOpen = windows.some((w) => currentMinutes >= w.open && currentMinutes < w.close);

  return {
    isOpen,
    day: now.day,
    today,
    dayLabelHe: DAY_HE[now.day],
    dayLabelEn: DAY_EN[now.day],
  };
}

export function formatHoursLine(hours, lang) {
  const days = lang === "en" ? DAY_EN : DAY_HE;
  return hours.map((h) => ({
    ...h,
    label: days[h.day],
    range: `${h.open}-${h.close}`,
  }));
}

export function todaySpec(hours, day) {
  return hours.find((h) => h.day === day) || null;
}
