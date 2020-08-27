function addDateToHtml(date) {
  let element = document.createElement("li");
  element.textContent = date.date.toLocaleString();

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () =>
    deleteDate(date.id, () => datesList.removeChild(element));
  element.appendChild(deleteButton);

  datesList.appendChild(element);
}

loadDates((dates) => {
  dates.forEach(addDateToHtml);
});

const dateInput = document.getElementById("dateInput");
document.getElementById("addForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addDate(new Date(dateInput.value), addDateToHtml);
});
