function updateTime() {
  //abuja
  let abujaElement = document.querySelector("#abuja");
  if (abujaElement) {
    let abujaDateElement = abujaElement.querySelector(".date");
    let abujaDate = moment().tz("Africa/lagos").format("MMMM Do YYYY");
    abujaDateElement.innerHTML = abujaDate;

    let abujaTimeElement = abujaElement.querySelector(".time");
    let abujaTime = moment()
      .tz("Africa/lagos")
      .format("H:mm:ss [<small>] A [</small>]");
    abujaTimeElement.innerHTML = abujaTime;
  }

  //london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonDate = moment().tz("Europe/london").format("MMMM Do YYYY");
    londonDateElement.innerHTML = londonDate;

    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment()
      .tz("Europe/london")
      .format("H:mm:ss [<small>] A [</small>]");
    londonTimeElement.innerHTML = londonTime;
  }

  //Nairobi
  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobiDate = moment().tz("Africa/Nairobi").format("MMMM Do YYYY");
    nairobiDateElement.innerHTML = nairobiDate;

    let nairobiTimeElement = nairobiElement.querySelector(".time");
    let nairobiTime = moment()
      .tz("Africa/Nairobi")
      .format("H:mm:ss [<small>] A [</small>]");
    nairobiTimeElement.innerHTML = nairobiTime;
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone == "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("-", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time"> ${cityTime.format(
            "H:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div> 
        <a href="/">All cities</a>`;
}
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
