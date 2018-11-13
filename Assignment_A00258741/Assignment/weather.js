
function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        xhr = false;
      }
    }
  }
  return xhr;
}

function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
      
         
           var data = request.responseXML;
	 
	        console.log(data);
          show(data);
          show1(data);
	
	  

	  
    }
  }
}


$(document).ready(function(){
 
  $('#submitWeather').click(function(){

    var city = $("#city").val();
          //console.log(city);

        

          
      

    if(city != '')
    {
        var request = getHTTPObject();
        if (request) {
          request.onreadystatechange = function() {
            parseResponse(request);
          };
          request.open("GET",'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&mode=xml&cnt=5" + "&units=metric"+
                "&APPID=05ff2d322eb304b5da21ba5bc35ff032", true);
          request.send(null);
         

        }

    }
    else{
        $('#error').html('Field cannot be empty');

    }
    
 });
 });
 
  function show(data){  
    var datas = "";
           var Forecast1= [] ; var datefr= []; var dateto = [];
           var Forecast2=[];	
		    var name = data.getElementsByTagName("name")[0].childNodes[0].nodeValue;
			var location1 = data.getElementsByTagName("location")[1].getAttribute('altitude');
			var fore = data.getElementsByTagName("time")[1].getAttribute('from');	
var forecast= data.getElementsByTagName("time");		   
		   
			for(var i=0;i<forecast.length;i++){
      
        var timefro = data.getElementsByTagName("time")[i].getAttribute('from');
        var fromsplit = timefro.split("T");
        datefr.push(timefro);
        var timeto = data.getElementsByTagName("time")[i].getAttribute('to');
        var tosplit = timeto.split("T");
      dateto.push(timeto);

				var tempmax =data.getElementsByTagName("temperature")[i].getAttribute('max');
				 //console.log(Forecast1);
				 Forecast1.push(tempmax);
      
         var tempc = [data.getElementsByTagName("temperature")[i].getAttribute('value')];
         var sym = "http://openweathermap.org/img/w/" + data.getElementsByTagName("symbol")[i].getAttribute('var') + ".png";

         var windspeed = [data.getElementsByTagName("windSpeed")[i].getAttribute('mps')];

         var winddir = [data.getElementsByTagName("windDirection")[i].getAttribute('name')];
         

		 datas += "<div class='col-sm-4'><div class='weather-wrapper'><div class='weather-card'><div class='dates'>" + fromsplit[0] + " <br>" + fromsplit[1] + " - " + tosplit[1]  + "</div><div class='wind'> Wind :"  +windspeed + "m/  s <br> Dir:" + winddir +"</div><div class='weather-icon '><img src = '" + sym + "'></div> <h1>" + tempc + "</h1> <p>" + name +"</p></div></div></div>";
			 
		 
				var tempmin = data.getElementsByTagName("temperature")[i].getAttribute('min');
				 //console.log(Forecast1);
         Forecast2.push(tempmin);
         
      }


      document.getElementById('data').innerHTML = datas; 
      
      document.getElementById('charts').style.display = "block"; 
      
		 
			 console.log("s1" + Forecast1);console.log("s2" + Forecast2);
	var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: datefr,
    datasets: [{
      label: 'Max_Temp',
      data: Forecast1,
      backgroundColor: "#0000FF"
    }, {
      label: 'Min_Temp',
      data: Forecast2,
      backgroundColor: "#ff0055"
    }]
  }
});

	
			 
			
			
			
  }


         
			
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          
     function show1(data)
			{
			var Forecast3 = [];
             var Forecast4 = [];var datefr= []; 
                 var name = data.getElementsByTagName("name")[0].childNodes[0].nodeValue;
			var location1 = data.getElementsByTagName("location")[1].getAttribute('altitude');
			var fore = data.getElementsByTagName("time")[1].getAttribute('from');				 
			var forecast1 = data.getElementsByTagName("time");
      
      console.log("da" + data);
			for(var i=0;i<forecast1.length;i++)
			{

        var timefro = data.getElementsByTagName("time")[i].getAttribute('from');
        datefr.push(timefro);

				var temp = data.getElementsByTagName("pressure")[i].getAttribute('value');
				 console.log(Forecast3);
				 Forecast3.push(temp);
			
			 console.log(Forecast3);
			 
			 
				var temp = data.getElementsByTagName("humidity")[i].getAttribute('value');
				 console.log(Forecast4);
				 Forecast4.push(temp);
			
			 console.log("4" + Forecast4);
			}
				var ctx1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels:datefr,
    datasets: [{
      label: 'humidity',
      data: Forecast4,
      backgroundColor: "#ff0055"
    }, {
      label: 'pressure',
      data: Forecast3,
      backgroundColor: "#0000FF"
     
    }]
  }
});

	
		 

			
}



			

 
 
 
 
 
 
 
  
  










