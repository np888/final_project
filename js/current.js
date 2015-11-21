// The API url and the city we want to check...
var url = "json/items.json";
var city = "Toronto,ON";
var units = "metric";


// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
//$.getJSON(url, {'q':city, 'units':units}, function(data)
$.getJSON(url, function(data)
{
	
	console.log(dat);

});


