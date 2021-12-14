var autocomplete;

function getAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("enter_text"),
    {
        types:['establishment'],
        componentRestrictions:{'country': ['AU']}, 
        fields: ['place_id', 'geometry','name']
    });
}