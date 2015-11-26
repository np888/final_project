// The API url and the city we want to check...
//var url = "json/items.json";
var url = "https://raw.githubusercontent.com/np888/final_project/master/json/Items.json"
var city = "Toronto,ON";
var units = "metric";


// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
//$.getJSON(url, {'q':city, 'units':units}, function(data)
$.getJSON(url, function(data)
{
	
	//console.log(data);

	$.each(data, function (i, node) {

		if(node.length > 0){

			//console.log(node.length)	
			//console.log("iterate through array")	
			for (var i = 0; i < node.length; i++) {
			    
			    //console.log(node[i].ItemNumber);
			    $('.items').append('<li ><a href="#">'+ node[i].ItemNumber +'</a></li>'); 

			}
		}
	 }); 

});


//add callback to menu
$(document).ready(function(){

	$(".items").on('click', function(e){

		//alert($('.items a').text);
		//var clickedBtnID = $(this).attr('text'); // or var clickedBtnID = this.id
   		//alert(e.currentTarget.innerText);
		//console.log(e)

		var url = "https://raw.githubusercontent.com/np888/final_project/master/json/Items(2GPROC).json"

		$.getJSON(url, function(data)
		{
			//alert(data.Payload.CurrentCost)
			//console.log(data.Payload);
			//console.log(data.Payload.ItemNumber);

			$("#itemnumber").val(data.Payload.ItemNumber)
			$("#inactive").val(data.Payload.Inactive)
			$("#description").val(data.Payload.ItemDescription)
			$("#shortdesc").val(data.Payload.ItemShortName)
			$("#genericdesc").val(data.Payload.ItemGenericDescription)
			$("#classid").val(data.Payload.ItemClassCode)
			$("#itemtype").val(data.Payload.ItemType)
			$("#qtydecimals").val(data.Payload.DecimalPlacesQTYS)
			$("#valmenthod").val(data.Payload.ValuationMethod)
			$("#currdecimals").val(data.Payload.DecimalPlacesCurrency)
			$("#salestax").val(data.Payload.TaxOptions)
			$("#purchtax").val(data.Payload.PurchaseTaxOptions)
			$("#taxschedule").val(data.Payload.ItemTaxScheduleID)
			$("#purchtaxschedule").val(data.Payload.PurchaseItemTaxScheduleID)
			$("#uofmschedule").val(data.Payload.UOfMSchedule)
			$("#stdcost").val(data.Payload.StandardCost)
			$("#currcost").val(data.Payload.CurrentCost)
		});




		$.sidr('close', 'sidr');
	});


/*	$(window).touchwipe({
        wipeLeft: function() {
          // Close
          $.sidr('close', 'sidr');
        },
        wipeRight: function() {
          // Open
          $.sidr('open', 'sidr');
        },
        preventDefaultEvents: false
    });
*/

});
