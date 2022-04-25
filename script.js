
const buttons = document.querySelectorAll("button");

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

let total;
let finalDate;
let intervalId;

if (localStorage.getItem("timer")) {
  finalDate = localStorage.getItem("timer");
  intervalId = setInterval(timer, 1000);
}

function start() {
  const date = document.querySelector("input").value;
  finalDate = new Date(date).getTime();
  localStorage.setItem("timer", finalDate);
  intervalId = setInterval(timer, 1000);
}

function timer() {
  let now = new Date().getTime();
  total = finalDate - now;
  const days = Math.floor(total / day);
  const hours = Math.floor((total % day) / hour) + 3;
  const minutes = Math.floor((total % hour) / minute);
  const seconds = Math.floor((total % minute) / second);

  document.querySelector("h3").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`
}

function stop() {
  document.querySelector("h3").innerText = "⏱️";
  clearInterval(intervalId);
  localStorage.removeItem("timer", finalDate);
}

buttons.forEach((button) => {
  button.onclick = () => {
    switch(event.target.className) {
      case "buttonGo":
        start();
        break;
      case "buttonReset":
        stop();
        break;
      default: console.log(this.innerHTML);
    }
  }
})

// setInterval(start, 1000);

// const timezone = Intl.DateTimeFormat(now);
// console.log(timezone);
// console.log(finalDate.toLocaleString());
//
// const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(tzid);

// document.querySelectorAll("button").forEach((button) => {
//   button.onclick = () => {
//     if (this.className = "buttonGo") {
//       alert("Hello");
//     }
//   }
// })
