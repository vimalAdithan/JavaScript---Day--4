// Question 2,3
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = () => {
  var result = JSON.parse(request.response);
  for (var obj of result) {
    console.log(obj.flag);
    console.log(obj.name.common, obj.region, obj.subregion, obj.population);
  }
};