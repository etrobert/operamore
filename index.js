"use strict";

const datesList = document.getElementById("datesList");

function addDateToHtml(date) {
  let element = document.createElement("li");
  element.textContent = formatDate(date.date);
  datesList.appendChild(element);
}

loadDates((dates) => {
  dates.forEach(addDateToHtml);
});
