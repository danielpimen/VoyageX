console.log('Hello');

//Departure
//Destination
//Trip Date
//People
let tripDetail;


$('#bookBtn').click(function() {

    let tripDetail = {
        spaceCenter: $("#departure-selected").val(),
        destination: $("#destination-selected").val(),
        date: $("#date-selected").val(),
        passengers: $("#passenger-selected").val()

    }
    console.log(tripDetail);

    $.post('/api/trip', tripDetail, function(data) {
        // alert('Submitted');
    }).then(function() {
        navigatePage(tripDetail);
    });


});

function navigatePage(tripDetail) {
    console.log(tripDetail.destination);
    let url = "/destinations/" + tripDetail.destination + ".html";
    window.location = url;
    // window.location.href = '../destinations/' + tripDetail.location + '.html';
}