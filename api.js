"use strict";

const serverAddress = "http://localhost:3000";

function addDate(date, then) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      then(JSON.parse(request.responseText));
    }
  };
  request.open("POST", serverAddress + "/dates", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify({ date }));
}

function loadDates(then) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      then(JSON.parse(request.responseText));
    }
  };
  request.open("GET", serverAddress + "/dates", true);
  request.send();
}

function deleteDate(dateId, then) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      then();
    }
  };
  request.open("DELETE", serverAddress + `/dates/${dateId}`, true);
  request.send();
}
