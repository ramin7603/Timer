const $ = document;
let numberHours = $.querySelector(".showHours");
let numberMinute = $.querySelector(".showMinute");
let numberSecond = $.querySelector(".showSecond");

function ShowDate() {
  let date = new Date();
  if (date.getHours() < 10) {
    numberHours.innerHTML = "0" + date.getHours();
  } else {
    numberHours.innerHTML = date.getHours();
  }
  if (date.getMinutes() < 10) {
    numberMinute.innerHTML = "0" + date.getMinutes();
  } else {
    numberMinute.innerHTML = date.getMinutes();
  }
  if (date.getSeconds() < 10) {
    numberSecond.innerHTML = "0" + date.getSeconds();
  } else {
    numberSecond.innerHTML = date.getSeconds();
  }
}
setInterval(ShowDate, 1000);
