 var requestUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';


  var section = document.querySelector('section');

var request = new XMLHttpRequest();
request.open('GET', requestUrl );
request.responseType = 'json';
request.send();

request.onload = function() {
    var cityData = request.response;
    showCitys(cityData);
}

function showCitys(jsonObj) {
    var citys = jsonObj['towns'];
    
    for (var i = 0; i < citys.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');
    var myList = document.createElement('ul');
    
    
    
    myH2.textContent = citys[i].name;
    myPara1.textContent = 'City Name: ' + citys[i].name;
    myPara2.textContent = 'Moto: ' + citys[i].motto;
 //   myPara3.textContent = 'Events:';
    myPara4.textContent = 'Year Founded: ' + citys[i].yearFounded;
    myPara5.textContent = 'Current Population: ' + citys[i].currentPopulation;
    myPara6.textContent = 'Average Rainfall: ' + citys[i].averageRainfall + ' inches';
        
 /*   var cityEvents = citys[i].events;
    for (var j = 0; j < cityEvents.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = cityEvents[j];
      myList.appendChild(listItem);
    } */

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara3);
 //   myArticle.appendChild(myList);

    section.appendChild(myArticle);
    
}
}