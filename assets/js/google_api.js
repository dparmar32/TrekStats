//global values from geocode
var lat1;
var lng1;

// initializes api
function initApi(){
    initAutocomplete();
}
// function for search bar
var autocomplete;

function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("enter_text"),
    {
        types:['(cities)'],
        fields: ['place_id','geometry','name']
        
    });

    autocomplete.addListener('place_changed', onPlaceChanged);
}
// handels what would happen if a place wasn't entered correctly 
function onPlaceChanged(){
    var place= autocomplete.getPlace();

    if(!place.geometry){
        document.getElementById('enter_text').placeholer="Enter Place";
        return console.log("oh no enter a city");
    }

    else{
        var locationForm = document.getElementById("submit-location");

        locationForm.addEventListener('submit',geocode); 
        document.getElementById('enter_text').innerHTML = place.name;
    }
}

// function populates a google map depending on user input
function initMap(latitude, longitude){

    var options ={
        zoom: 12,
        center: {lat:latitude, lng:longitude}
    }

    var map = new google.maps.Map(document.getElementById('map'),options);

    // creates a marker for the location which user selected
    var marker = new google.maps.Marker({
        position:{lat:latitude, lng:longitude},
        map: map
    });

}

// geocode function that waits for search button to be clicked
function geocode(e){
    
    //prevents submition form loading to server
    e.preventDefault();

    // calls for geolocation API
    var location=document.getElementById('enter_text').value;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address:location,
            key:"AIzaSyBdbdSYXsQnnq9X9E7IyEwweli047A9DCI"
        }
    })
    .then(function(response){

        console.log(response);

        lat1 = (response.data.results[0].geometry.location.lat);
        lng1 = (response.data.results[0].geometry.location.lng);
    
        initMap(lat1,lng1);
    })
    .catch(function(error){
        console.log(error);
    });
}