console.log('dog');


$( "#selectBtn" ).click(function() {
 		
  let hotel = $( "select#exampleFormControlSelect2" ).val();
  let itinerary = ("You are traveling via " + shuttle + " and will stay at " + hotel);
  console.log(itinerary);
});