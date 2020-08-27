"use strict";

const serverAddress = "http://localhost:3000";

function addDate(then) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      then(JSON.parse(request.responseText));
    }
  };
  request.open("POST", serverAddress + "/dates", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify({ date: new Date() }));
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
