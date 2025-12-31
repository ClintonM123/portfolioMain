const title = document.getElementById("title");
title.addEventListener("click", () => {
  let abc = prompt("Enter your name:");
  if (abc) {
    title.textContent = "Welcome " + abc + " To Clinton Meshack k Portfolio";
  }
});

const item = document.querySelectorAll("p");
const middle = item[4];
middle.addEventListener("click", () => {
  window.location.href = "mailto:meshackclinton802@gmail.com";
});
