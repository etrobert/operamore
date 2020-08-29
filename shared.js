"use strict";

function formatDate(date) {
  const daysOfWeek = ["So.", "Mo.", "Die.", "Mi.", "Do.", "Fr.", "Sa."];
  const dayOfWeek = daysOfWeek[date.getDay()].padEnd(4);
  const dayOfMonth = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const hour = (date.getHours() + 1).toString().padStart(2);
  const minutes = (date.getMinutes() + 1).toString().padStart(2, "0");
  return `${dayOfWeek} ${dayOfMonth}.${month}.${year} - ${hour}.${minutes}`;
}
