var lat;
    var lon;
window.onload = function(){

    /* Getting current location of the user*/ 
    
    
    

    /* Unique App ID for open weather map API*/
    var appId = "18e67e100725e8d1240561b4c74649f3";
        /*Using HTML5 geo location*/
        function getlocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }
        function showPosition(position){
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            
            var ipurlOpenWeatherMaps = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${appId}/${lat},${lon}`;
            httpRequest1Async(ipurlOpenWeatherMaps);
        }
        
    getlocation();
    
  
    

    /* Grabbing location id from HTML*/
    var location = document.getElementById("location");
    var temp = document.getElementById("temp");
    var tempdesc = document.getElementById("temp-desc");
    


    /* HTTP Request for ipinfo/json*/
    function httpRequest1Async(url, callback){
    
   

        var httpReqIp = new XMLHttpRequest();
        
        httpReqIp.open("GET", url, true);

        httpReqIp.onreadystatechange = function(){

            if(httpReqIp.readyState == 4 && httpReqIp.status == 200){
                /* Storing the JSON object response from the API*/
                var jsonIp = JSON.parse(httpReqIp.responseText);
                console.log(jsonIp);
                var onlycurrentinfo = jsonIp.currently;
                farenhite = onlycurrentinfo.temperature;
                location.innerHTML = jsonIp.timezone;
                farenhiteToDegree = (farenhite-32)*5/9;
                temp.innerHTML = Math.round(farenhiteToDegree) + " Celcius";
                tempdesc.innerHTML = onlycurrentinfo.summary;

                
            }
        }
        httpReqIp.send();
    }

    
}