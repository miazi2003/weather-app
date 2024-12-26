// http://api.weatherapi.com/v1/current.json?key=599af6f8a91149468b935522242412&q=dhaka&aqi=no

const tempareture = document.querySelector(".temp");
const place = document.querySelector(".time-location p ");
const date = document.querySelector(".time-location span");
const weather = document.querySelector(".condition h5");
const humidity = document.querySelector(".humidity");
const tempfar = document.querySelector(".tempfu");
const windSpeedk = document.querySelector(".windSpeedk");
const windSpeedm = document.querySelector(".windSpeedm");
const windDirection = document.querySelector(".winddir");
const searchField = document.querySelector(".search-area");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);

let target = "Dhaka";
const fetchResult = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=599af6f8a91149468b935522242412&q=${targetLocation}&aqi=no`;
  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  let Name = data.location.name;
  let time = data.location.localtime;
  let country = data.location.country;
  let tempc = data.current.temp_c;
  let tempf = data.current.temp_f;
  let condIcon = data.current.condition.icon;
  let cond = data.current.condition.text;
  let hum = data.current.humidity;
  let windk = data.current.wind_kph;
  let windm = data.current.wind_mph;
  let windd = data.current.wind_dir;


  console.log(Name, time, country, tempc, tempf, condIcon, cond,hum,windk,windm,windd);
  console.log(windk)
  updateDetails(tempc, Name, time, cond ,tempf,hum,windk,windm,windd);
};

function updateDetails(tempc, Name, time, cond ,tempf,hum,windk,windm,windd) {
  tempareture.innerText = tempc+"";
    place.innerText = Name;
    date.innerText = time;
    weather.innerText =  cond;
    humidity.innerText =hum;
    tempfar.innerText =tempf;
    windSpeedk.innerText = windk +" "+ "kph";
    windSpeedm.innerText =   windm + " "+ "mph";
    windDirection.innerText = windd;
}

function searchForLocation(e) {
  e.preventDefault();
  target = searchField.value;
  fetchResult(target);
}
fetchResult(target);
