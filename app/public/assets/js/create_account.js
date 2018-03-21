$(document).ready(function() {
  console.log("account.js loaded");
    //'use strict';

    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('click', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {

              $("#profile-button").attr("href","book.html");

              var newUser = {
                firstName: $("#first-name-input").val().trim(),
                lastName: $("#last-name-input").val().trim(),
                addr1: $("#street-address-line-input1").val().trim(),
                addr2: $("#street-address-line-input2").val().trim(),
                city: $("#city-input").val().trim(),
                state:$("#state-input").val(),
                zip: $("#zip-input").val().trim(),
                number: $("#number-input").val().trim(),
                emergencyNum: $("#emergency-number-input").val().trim(),
                medConditions: $("#medical-conditions").val().trim()
              };

              console.log(newUser);

              //send POST request
              $.post("/api/new", newUser)
              .then(function(data){
                console.log(data);
              });

              modal();
            }
          form.classList.add('was-validated');
        }, false);

      });

    }, false);

      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal 
      btn.onclick = function() {
          event.preventDefault();
          modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }

});

