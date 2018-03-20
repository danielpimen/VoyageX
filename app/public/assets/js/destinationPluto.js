 /*       -New Horizon speed : 58,536 km/h
           -space shuttle : 28,968 kilometers per hour
           - Juno : 265,000 km/h
           - airplane : 2140 km/h
           */
console.log('hello');
      
 $(document).ready(function() {
     let distanceKM;



     $.get('/api/trip',
         function(data) {
             //alert('Submitted');
             console.log(data);
             

         });


     $.get('/example', function(apiData) {
         let distanceAU = apiData.table.rows[9].cells[0].distance.from_earth.au;
         let distanceKM = apiData.table.rows[9].cells[0].distance.from_earth.km;
         console.log(distanceKM, distanceAU)
         let horionsSpeed = 58536;
         let hours = distanceKM / horionsSpeed;
         let estimatedTime1 = Math.round(hours);
         let estimatedYears1 = Math.round(hours / 365);

         console.log(estimatedYears1);


         $('#estimatedTime1').text('Estimated Time : ' + estimatedYears1 + ' years');
     });

     $.get('/example', function(apiData) {
     	console.log(apiData);
         let distanceKM = apiData.table.rows[9].cells[0].distance.from_earth.km;
         let shuttleSpeed = 28968;
         let hours = distanceKM / shuttleSpeed
         let estimatedTime2 = Math.round(hours / 24);
         let estimatedYears2 = Math.round(hours / 365);

         console.log(estimatedYears2);


         $('#estimatedTime2').text('Estimated Time : ' + estimatedYears2 + ' years');
     });

     $.get('/example', function(apiData) {
         let distanceKM = apiData.table.rows[9].cells[0].distance.from_earth.km;
         let airplaneSpeed = 2140;
         let hours = distanceKM / airplaneSpeed
         let estimatedTime3 = Math.round(hours / 24);
         let estimatedYears3 = Math.round(hours / 365);

         console.log(estimatedYears3);


         $('#estimatedTime3').text('Estimated Time : ' + estimatedYears3 + ' years');

     });
 });
