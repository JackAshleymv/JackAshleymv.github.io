var requestURL = 'http://api.wunderground.com/api/7dccc6d8b85c4daa/conditions/q/mn/franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var franklinWeather = JSON.parse(request.responseText);
    document.getElementById('temp');
    temp.textContent = 'Tempeture ' + franklinWeather.current_observation.temp_f + ' F';
    document.getElementById('wind');
    document.getElementById('prec');
    var imageUrl = franklinWeather.current_observation.icon_url;
    
    
    prec.textContent = 'Precipitation: ' + franklinWeather.current_observation.precip_1hr_string;
    wind.textContent = 'Wind Speed: ' + franklinWeather.current_observation.wind_mph + ' mph'; 
    
     var iconText = franklinWeather.current_observation.icon;   
    
    document.getElementById('weatherPic').src = imageUrl;
    document.getElementById('weatherText');


    weatherText.textContent = iconText;
    
}