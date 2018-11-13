"use strict";
var $ = function(id) { return document.getElementById(id); };

var saveReservation = function() {
    sessionStorage.name=$("name").value;
    sessionStorage.phone=$("phone").value;
    sessionStorage.email=$("email").value;
    sessionStorage.arrivalDate=$("arrival_date").value;
    sessionStorage.nights=$("nights").value;
    sessionStorage.adults=$("adults").value;
    sessionStorage.children=$("children").value;
    
    if($("standard").checked){
        sessionStorage.roomType=$("standard").value; 
    }
    else if($("business").checked){
        sessionStorage.roomType=$("business").value; 
    }
    else{
        sessionStorage.roomType=$("suite").value; 
    }
   
    if($("king").checked){
          sessionStorage.bedType=$("king").value;
    }
    else{
          sessionStorage.bedType=$("double").value;
    }
    
    if($("smoking").checked){
            sessionStorage.smoking=$("smoking").value;
    }
   else{
        sessionStorage.smoking="No Smoking";
   }
  
        
    // submit form
    $("reservation_form").submit();
};

window.onload = function() {
    $("submit_request").onclick = saveReservation;
    $("arrival_date").focus();
};