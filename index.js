"use strict";

const main = document.getElementsByTagName("main")[0];
const scrollIcon = document.getElementById("scrollIcon");

scrollIcon.addEventListener("click", () =>
  main.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
);
