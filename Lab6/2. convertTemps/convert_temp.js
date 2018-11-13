"use strict";
var $ = function (id) {
    return document.getElementById(id);
};


var clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function () {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};

function toFahrenheit() {

    $("degree_label_1").innerHTML = "Enter C degrees";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
    clearTextBoxes();
};

function toCelsius() {

    $("degree_label_1").innerHTML = "Enter F degrees";
    $("degree_label_2").innerHTML = "Degrees Celsius:";
    clearTextBoxes();
};

function convertTemp() {
    let degree=$("degrees_entered").value;
    let result=$("degrees_computed");
    let temp;
    if ($("to_celsius").checked) {
       if(degree==="" || isNaN(degree)){
           alert("Please Enter degree");
       }
        else{
        temp=(degree-32)*(5/9);
            document.getElementById("degrees_computed").value = temp;
        }
    }
    if ($("to_fahrenheit").checked) {
       if(degree==="" || isNaN(degree)){
           alert("Please Enter degree");
       }
        else{
        temp=(degree*(9/5))+32;
        document.getElementById("degrees_computed").value = temp;
        

    }
    }
   
};
