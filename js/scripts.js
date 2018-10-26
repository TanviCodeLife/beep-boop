//generate range of numbers for user input
function generateRangeOfNumbers(inputInteger){
  var numbersArray = [];
for(var i = 0; i <= inputInteger; i++){
  numbersArray = numbersArray.concat(i);
}
 return numbersArray;
}

//check condition 1: divisibility by 3
function checkDivisibleByThree(rangeArray){
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

//check condition 2: check all array elements for 1s
function checkNumberOne(arrayWithCondition1){
  var newArray = arrayWithCondition1.toString().split(",");
  var length = newArray.length;
  console.log(newArray);
  debugger;
  var splitDigits = [];
  for (var i = 0; i < length; i++){
    splitDigits = newArray[i].split("");
    console.log(splitDigits[i]);
    var lengthDigitsArr = splitDigits.length;
    var condition2 = false;
    for (var j = 0; j < lengthDigitsArr; j++){
      if (parseInt(splitDigits[j]) === 1){
        console.log(splitDigits[j]);
        condition2 = true;
        console.log(condition2);
        console.log(newArray[i]);
        console.log(i);
        newArray[i] = "Boop!"
        continue;
      } else if (parseInt(splitDigits[j]) === 0 && condition2 === false){
        console.log(splitDigits[j]);
        var condition3 = true;
        console.log(condition3);
        console.log(newArray[i]);
        console.log(i);
        newArray[i] = "Beep!"
        continue;
      }
    }
  }
  console.log(newArray);
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
