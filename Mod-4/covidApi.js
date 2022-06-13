const api_url = "https://api.covid19api.com/summary";

async function getApiData(url) {
  var res = await fetch(url);
  var data = await res.json();
  console.log(data);
  console.log(data.Countries[183]);
  var country = data.Countries[183].Country;
  var TotalConfirmed = data.Countries[183].TotalConfirmed;
  var TotalDeaths = data.Countries[183].TotalDeaths;
  var NewConfirmed = data.Countries[183].NewConfirmed;
  var NewDeaths = data.Countries[183].NewDeaths;
  var today = data.Countries[183].Date;
  console.log(today);
  displayApiData(
    country,
    TotalConfirmed,
    TotalDeaths,
    NewConfirmed,
    NewDeaths,
    today
  );
}

getApiData(api_url);
function displayApiData(c, tc, td, nc, nd, t) {
  document.getElementById(
    "data"
  ).innerHTML = `Country Name: ${c} \nToday Date: ${t} \nTotal Cases: ${tc}\nTotal Deaths: ${td} \nNewCases: ${nc}\nNew Deaths: ${nd}`;
}
