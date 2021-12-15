var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
const x = document.getElementById("demo");

let geolocation_latitude =position.coords.latitude;
let geolocation_longitude = position.coords.longitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

const getApi = (zipcode)=> {
  let apikey = "S5_63PDtKsG05ge_ppjRbAKWEE_-GfReDYUzgyoZsf5xel0ykdZDGx-w9xzyJMJ1YySXmsFcx6yEmfr4GfCvVPKkwZal2vjf99-dhpRkFfBftj493X-K4je-moy2YXYx"
  let response_string = ''

  let requestUrl = new URL('https://api.yelp.com/v3/businesses/search?longitude%7Bgeolocation_longitude%7D&latitude=$%7Bgeolocation_latitude%7D&term=restaurant&limit=5')
  const authHeaders = {
    Authorization : 'Bearer ${apikey}',
    'Content-Type': 'application/json'
  }
  fetch(requestUrl, {
    authHeaders
  })
  .then(({data}) => {
    let {businesses} = data
    businesses.forEach((business)=> {
      response_string += business.name + "\n"
    });
    console.log(response_string)
  })
}

fetchButton.addEventListener('click', getApi);

