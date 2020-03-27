const weather = document.querySelector(".js-weather")

const API_KEY= "3cbf507ecd67e8195c2275015ae6eaf1"

const COORDS = 'coords'

function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
    return response.json()
  }).then(function(json){
    const tempt = json.main.temp;
    const place = json.name;
    weather.innerText = `${tempt} @ ${place}`;
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude:latitude,
    longitude:longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}
function handleGeoError(){
  console.log("Cant access geo location");
}

//좌표를 요청하는 함수 만들기
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);    // 두개의 함수를 갖는다
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null){
     askForCoords();/*좌표요청함수*/
   }else {
     const parseCoords = JSON.parse(loadedCoords);
     getWeather(parseCoords.latitude,parseCoords.longitude);
       //get weather
     }
  }


function init(){
  loadCoords();
}
init();
