function generateRangeOfNumbers(inputInteger){
  var numbersArray = [];
for(var i = 0; i <= inputInteger; i++){
  numbersArray = numbersArray.concat(i);
}
 console.log(numbersArray)
 return numbersArray;
}


//user input logic
$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputNumbInt = parseInt($("#inputNumb").val());
    console.log(inputNumbInt);
    var inputRange = generateRangeOfNumbers(inputNumbInt);
    console.log(inputRange);
   //check for whether number or not
  });
});
