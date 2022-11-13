// Get DOM elements
const key = '75e7ccabdef5725374998f0c3f3798b2';
const cityInput = document.getElementById('search-query'); 
const submitBtn = document.querySelector('.search');
const displayWeather = document.querySelector('.search-results'); 
const displayWeek = document.querySelector('.weekly-forecast'); 
const setDefault = document.getElementById('default');

const background = {
  "01d": "images/clear.jpg", //San Francisco
  "01n": "images/clear.jpg",
  "02d": "images/few-clouds.jpg",
  "02n": "images/few-clouds.jpg",
  "03d": "images/scattered-clouds.jpg", // Miami: scattered clouds
  "03n": "images/scattered-clouds.jpg",
  "04d": "images/overcast.jpg", // Toronto: overcast clouds
  "04n": "images/overcast.jpg",
  "09d": "images/rainy.jpg",
  "09d": "images/rainy.jpg",
  "10d": "images/rainy.jpg", // MOntreal, Orlando: light rain;
  "10n": "images/rainy.jpg",
  "11d": "images/thunderstorm.jpg",
  "11n": "images/thunderstorm.jpg",
  "13d": "images/snow.jpg", //Yellowknife
  "13n": "images/snow.jpg",  
  "50d": "images/mist.jpg",
  "50n": "images/mist.jpg", // London: mist
}


// Default City
// window.location.reload();
// setDefault.addEventListener('click', function(){
//   document.getElementById("cityInput").defaultValue = cityInput;
//   GetInfo();
  // document.getElementById("myText").defaultValue = "Goofy";
// })


// Part 1: Function to fetch current weather details from API and display results:

submitBtn.addEventListener('keypress', getCurrentWeather){
  if(e.key === "Enter"){

    
  }
};
 


const getCurrentWeather = function(){
  var cityValue = cityInput.value;
  console.log(`searching for city of ${cityValue}`)

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=imperial`)
    .then((response) => response.json())
    .then((data) => {

    // Switch statements to change background images
    const backgroundImage = data.weather[0].icon;
    console.log('Weather icon code = ' + backgroundImage);
    console.log('Background image =' + background["50n"]);

    switch(backgroundImage){
      case "01d": 
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        break;
      case "01n": 
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        break;
      case "02d":
        document.body.style.backgroundImage = "url('images/few-clouds.jpg')";
        break;
      case "02n":
        document.body.style.backgroundImage = "url('images/few-clouds.jpg')";
        break;
      case "03d": 
        document.body.style.backgroundImage = "url('images/scattered-clouds.jpg')";
        break;
      case "03n": 
        document.body.style.backgroundImage = "url('images/scattered-clouds.jpg')";
      case "04d":
        document.body.style.backgroundImage = "url('images/overcast.jpg')";
        break;
      case "04n": 
        document.body.style.backgroundImage = "url('images/overcast.jpg')";
        break;
      case "09d":
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
        break;
      case "09n": 
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
        break;
      case "10d":
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
        break;
      case "10n":
        document.body.style.backgroundImage = "url('images/rainy.jpg')";
        break;
      case "11d":
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        break;
      case "11n":
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        break;
      case "13d":
        document.body.style.backgroundImage = "url('images/snow.jpg')";
        break;
      case "13n":
        document.body.style.backgroundImage = "url('images/snow.jpg')";
        break;
      case "50d":
        document.body.style.backgroundImage = "url('images/mist.jpg')";
        break;
      case "50n":
        document.body.style.backgroundImage = "url('images/mist.jpg')";
        break;
    }


    // document.body.style.backgroundImage = "url('images/snow.jpg')";     
   // document.body.style.backgroundImage = "url('background['11d']'";     
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";  

  displayWeather.innerHTML = `
    <div className="weather-row">

      <div>
        <h2 className="weekly-temp">${data.main.temp.toFixed(0)}°</h2>
        <h4>${data.name}</h4>
      </div>
      <div>
        <h5>${data.weather[0].description}</h5>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" height=95px width=95px>
      </div>
    </div>
  `
  })

// Part 2: Function to fetch 5 day weather details from API and display results:
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      console.log('searching for 5 day forecast');
      // 1. temperature
      for(let i=0; i<5; i++){
        document.getElementById('temperature' +(i+1)).innerHTML 
        = `<h4>${data.list[i].main.temp.toFixed(0)}°</h4>`
      };
      // 2. weather icons
      for(let i=0; i<5; i++){
        document.getElementById('image' +(i+1)).src = 
        `http://openweathermap.org/img/wn/${ data.list[i].weather[0].icon}.png`
      }  
      // 3. weather conditions
      for(let i=0; i<5; i++){
        document.getElementById('weather' +(i+1)).innerHTML 
        = `<h6>${data.list[i].weather[0].main}</h6>` 
      };
  });
}

// Part 3: Days of the week
const d = new Date();
console.log(new Date());
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function CheckDay(day){
  if(day + d.getDay() > 6){
    return day + d.getDay() - 7;
  }
  else{
    return day + d.getDay();
  }
}

for(i = 0; i<5; i++){
  document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}


submitBtn.addEventListener('click', getCurrentWeather);
