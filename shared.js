function formatDate(date) {
  const daysOfWeek = ["So", "Mo", "Die", "Mi", "Do", "Fr", "Sa"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours() + 1;
  const minutes = date.getMinutes() + 1;
  return `${dayOfWeek}. ${dayOfMonth}.${month}.${year} um ${hour}.${minutes}`;
}
