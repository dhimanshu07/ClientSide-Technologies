var $ = function (id) {
    return document.getElementById(id); 
};

window.onload = function () {
    $("calculate").onclick = processEntry;
};

var processEntry = function ()
 {
       let subtotal = parseFloat( $("subtotal").value );
       let taxrate = parseFloat( $("tax_rate").value );
       let salestax = parseFloat( $("sales_tax").value );
       
        if (isNaN(subtotal) || subtotal < 0 || subtotal > 10000 ) {     $("subtotal_message").firstChild.nodeValue="Subtotal must be a valid between 0 to 10000";
        }
      else if (isNaN(taxrate) || taxrate < 0 || taxrate > 12 ) {
            $("tax_rate_message").firstChild.nodeValue="Tax Rate must be a valid between 0 to 12";
        }
     else{
         $("subtotal_message").firstChild.nodeValue="";
         $("tax_rate_message").firstChild.nodeValue="";
         var total=subtotal+(subtotal*taxrate)+(subtotal*salestax);
         
         $("total").value = total;
     }
    
        
 }


