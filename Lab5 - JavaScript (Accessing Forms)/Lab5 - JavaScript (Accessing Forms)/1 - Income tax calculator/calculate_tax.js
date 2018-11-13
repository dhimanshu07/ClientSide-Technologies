"use strict";
var $ = function (id) {
    return document.getElementById(id);
};


window.onload = function () {
    $("calculate").onclick = processEntry;
};

var processEntry = function ()
 {
   
    let income = parseFloat( $("income").value );
    
     
        if (isNaN(income) || income <= 0) {
        alert("Income must be a valid number\nand  greater than zero.");
         }
        else{
             $("tax").value = "";
            let tax=0;
            if(income>0 && income<9225){
                tax=0+income*0.10;   
            }
            else if(income>=9225 && income<37450){
                tax=922.50+income*0.15; 
            }
            else if(income>=37450 && income<90750){
                tax=5156.25+income*0.25; 
            }
            else if(income>=90750 && income<189300){
                tax=18481.25+income*0.28; 
            }
            else if(income>=189300 && income<411500){
                tax=46075.25+income*0.33; 
            }
            else if(income>=411500 && income<413200){
                tax=119401.25+income*0.35; 
            }
            else{
                tax=119996.25+income*0.396;
            }
             $("tax").value = tax;
        }
 }