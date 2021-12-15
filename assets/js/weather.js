function cityData(){

    
    var cityName = document.getElementById("cityNameInput");
        // Requiring fs module in which
    // writeFile function is defined.
    const fs = require('fs')
    
    // Data which will write in a file.
    let data = "Learning how to write in a file."
    
    // Write data in 'Output.txt' .
    fs.writeFile('Output.txt', cityName, (err) => {
        
        // In case of a error throw err.
        if (err) throw err;
    })



    
    
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
}