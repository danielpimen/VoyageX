console.log('sup doge');
$('#selectBtn').click(function(){
let userChoice= { 
 shuttle : $('#exampleFormControlSelect1').val(),
 hotel : $('#exampleFormControlSelect2').val()
};

console.log(userChoice);

    $.post('/user/trip', userChoice, function(data) {
         alert('Submitted');
    }).then(function() {
        window.location = "../mytrip.html";

    });

});