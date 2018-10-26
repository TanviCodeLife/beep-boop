function generateRangeOfNumbers(inputInteger){
  var numbersArray = [];
for(var i = 0; i <= inputInteger; i++){
  numbersArray = numbersArray.concat(i);
}
 return numbersArray;
}

function checkDivisibleByThree(rangeArray){
  // var arrayRaw = generateRangeOfNumbers(inputNumbInt);
  var arrayResult = [];
  for(var i = 1; i < rangeArray.length; i++ ){
    if (rangeArray[i] % 3 === 0){
      rangeArray[i] = "I'm sorry, Dave. I'm afraid I can't do that."
    }
  }
  console.log(rangeArray);
  console.log(arrayResult);
  return arrayResult;
}


//user input logic
$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputNumbInt = parseInt($("#inputNumb").val());
    console.log(inputNumbInt);
    var inputRange = generateRangeOfNumbers(inputNumbInt);
    // console.log(inputRange);
    checkDivisibleByThree(inputRange);
   //check for whether number or not
  });
});
