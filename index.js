"use strict";

const datesList = document.getElementById("datesList");

function addDateToHtml(date) {
  let element = document.createElement("li");
  element.textContent = date.date.toLocaleString();
  datesList.appendChild(element);
}

loadDates((dates) => {
  dates.forEach(addDateToHtml);
});
