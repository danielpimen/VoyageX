 /*       -New Horizon speed : 58,536 km/h
           -space shuttle : 28,968 kilometers per hour
           - Juno : 265,000 km/h
           - airplane : 2140 km/h
           */
 $(document).ready(function() {
     let distanceKM;



     $.get('/api/trip',
         function(data) {
             //alert('Submitted');
             console.log(data);
             

         });


     $.get('/example', function(apiData) {
         let distanceAU = apiData.table.rows[4].cells[0].distance.from_earth.au;
         let distanceKM = apiData.table.rows[4].cells[0].distance.from_earth.km;
         console.log(distanceKM, distanceAU)
         let horionsSpeed = 58536;
         let hours = distanceKM / horionsSpeed;
         let estimatedTime1 = Math.round(hours / 24);
         console.log(estimatedTime1);


         $('#estimatedTime1').text('Estimated Time : ' + estimatedTime1 + ' days');
     });

     $.get('/example', function(apiData) {
     	console.log(apiData);
         let distanceKM = apiData.table.rows[4].cells[0].distance.from_earth.km;
         let shuttleSpeed = 28968;
         let hours = distanceKM / shuttleSpeed
         let estimatedTime2 = Math.round(hours / 24);
         console.log(estimatedTime2);


         $('#estimatedTime2').text('Estimated Time : ' + estimatedTime2 + ' days');
     });

     $.get('/example', function(apiData) {
         let distanceKM = apiData.table.rows[4].cells[0].distance.from_earth.km;
         let airplaneSpeed = 2140;
         let hours = distanceKM / airplaneSpeed
         let estimatedTime3 = Math.round(hours / 24);
         console.log(estimatedTime3);


         $('#estimatedTime3').text('Estimated Time : ' + estimatedTime3 + ' days');
     });
 });