


var one = function(num1){
  return num1;
}

var num1 = prompt("Enter number 1");

if (num1 == 1) {
var new1 =  confirm("She gave me her number. Guess Who ?");
} if (new1 == true) {
var new2 =  confirm("She doesn't know kiswahili. Ushajua ni nani ? (press ok to know)");
} if(new2 == true){
alert("Fisi wewe. Ulafi ndio utaacha");
}if (new1 == false || new2 == false) {
  alert("Hataingia box! :)");
}
else if (num1 != 1) {
    alert("Nugu! Follow instructions!");
}
