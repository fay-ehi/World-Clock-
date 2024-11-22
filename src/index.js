function updateTime() {
  let abujaElement = document.querySelector("#abuja");
  let abujaDateElement = abujaElement.querySelector(".date");
  let abujaDate = moment().tz("Africa/lagos").format("MMMM Do YYYY");
  abujaDateElement.innerHTML = abujaDate;

  let abujaTimeElement = abujaElement.querySelector(".time");
  let abujaTime = moment()
    .tz("Africa/lagos")
    .format("H:mm:ss [<small>] A [</small>]");
  abujaTimeElement.innerHTML = abujaTime;

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonDate = moment().tz("Europe/london").format("MMMM Do YYYY");
  londonDateElement.innerHTML = londonDate;

  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment()
    .tz("Europe/london")
    .format("H:mm:ss [<small>] A [</small>]");
  londonTimeElement.innerHTML = londonTime;
}
updateTime();
setInterval(updateTime, 1000);
