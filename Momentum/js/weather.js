//const API_KEY = "8b2284e3d219a05ece84c954f5f3890f"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${log}&exclude={part}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main}`;
    console.log(url)
});
}

function onGeoError() {
    alert("can't find you. no weather")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

console.log(API_KEY);
//https://api.openweathermap.org/data/3.0/onecall?lat=37.4645534&lon=126.7038098&exclude={part}&appid=8b2284e3d219a05ece84c954f5f3890f