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
var length = arrayWithCondition1.length;
var newArray = arrayWithCondition1.toString().split(",");
console.log(newArray);
var splitDigits = [];
for (var i = 0; i < length; i++){
  splitDigits[i] = newArray[i].split(""));
  var lengthDigitsArr = splitDigits[i].length;
  console.log(splitDigitsInt[i]);
  for (var j = 0; j < lengthDigitsArr; j++){
    if (parseInt(splitDigits[j])) === 1){
      var condition2 = true;
      var Index = i;
      console.log(condition2);
      console.log(Index);
    }
  }
}
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
