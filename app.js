 const searchBox = document.querySelector('.search input');
 const searchBtn = document.querySelector('.search button');
 const icon = document.querySelector('.icon');

 const url = "https://api.openweathermap.org/data/2.5/weather?appid=e7bc452cd6b35e4f36cc81b4eab9b8be&units=metric&lang=fr&q=";
 
async function weather(city) {
 const response = await fetch(url + city);
 const data = await response.json();
 console.log(data);
 document.querySelector('.city').innerHTML = data.name;
 document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
 document.querySelector('.clouds').innerHTML = "Precipitation:" + " " + Math.floor(data.clouds.all) + "%";
 document.querySelector('.humidity').innerHTML = "Humidity:" +" " + data.main.humidity + "%";
document.querySelector('.wind').innerHTML ="Wind:" + " " + data.wind.speed  + "km/h";
if (data.weather[0].main== "Clouds"){
   icon.src="moon.png";
}else if (data.weather[0].main== "Rain"){
   icon.src="rain.png";
}else if (data.weather[0].main== "Clear"){
   icon.src="sun.png"
}else if (data.weather[0].main== "Drizzle"){
   icon.src="rain.png"
}else if (data.weather[0].main== "Mist"){
   icon.src="tornado.png"
}


}
searchBtn.addEventListener('click', () =>{
    weather(searchBox.value);
})


// searchBtn.addEventListener('onclick', () => {
//    searchBtn.classList.toggle('fa times');
//  })

// const url = "https://api.openweathermap.org/data/2.5/weather?q=ogun&appid=e7bc452cd6b35e4f36cc81b4eab9b8be&units=metric"
// fetch(url)
// .then((response) => console.log(response.json()))
// .catch((error)=>console.error(error))

