// Icons object 
const weatherIcons = ["01d", "01n", "02d", "02n", "03d", "03n", "04d", "04n", "05d", "05n", "06d", "06n", "07d", "06n", "07d", "07n", "08d", "08n", "09d", "09n", "10d", "10n", "11d", "11n", "12d", "12n", "13d", "13n", "50d", "50n"]

const bgImages = ["images/sunny.jpg", "images/few-clouds.jpg",
"images/rainy.jpg", "images/thunderstorm.jpg", "images/snow.jpg", 
"images/mist.jpg", "images/clear.jpg"]



function changeBackground(backgroundImage){
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

  return document.body.style.backgroundImage = background[photo][data.weather[0].icon]
}
}
  // Loop through images to get background image
  for (let item in background){
    document.body.style.backgroundImage = background["11d"]; 

  }