console.log('Hello');

//Departure
//Destination
//Trip Date
//People

$('#bookBtn').click(function() {

    let tripDetail = {
        spaceCenter: $("#departure-selected").val(),
        destination: $("#destination-selected").val(),
        date: $("#date-selected").val(),
        passengers: $("#passenger-selected").val()

    }
    console.log(tripDetail);

    $.post('/api/trip', tripDetail, 
    	function(data){
    		alert('Submitted');

    	})

});