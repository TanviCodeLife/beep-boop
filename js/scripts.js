//generate range of numbers for user input
function generateRangeOfNumbers(inputInteger){
  var numbersArray = [];
for(var i = 0; i <= inputInteger; i++){
  numbersArray = numbersArray.concat(i);
}
 return numbersArray;
}


//check condition 1,2 and 3
function checkAllConditions(array, uName){
  var arrayToModifyWithStrings = array.toString().split(",");
  var length = arrayToModifyWithStrings.length;
  console.log(arrayToModifyWithStrings);
  var splitDigits = [];
  for (var i = 0; i < length; i++){
    splitDigits = arrayToModifyWithStrings[i].split("");
    console.log(splitDigits);
    var lengthDigitsArr = splitDigits.length;
    var condition1 = false;
    var condition2 = false;
    var condition3 = false;
    for (var j = 0; j < lengthDigitsArr; j++){
      if (arrayToModifyWithStrings[i] % 3 === 0 && i !== 0){
        condition1 = true;
        arrayToModifyWithStrings[i] = "I'm sorry, " + uName + ". I'm afraid I can't do that."
        continue;
      } else if (parseInt(splitDigits[j]) === 1 && condition1 === false){
        condition2 = true;
        console.log(condition2);
        arrayToModifyWithStrings[i] = "Boop!"
        continue;
      } else if (parseInt(splitDigits[j]) === 0 && condition1 === false && condition2 === false && condition3 === false){
        console.log(splitDigits[j]);
        var condition3 = true;
        arrayToModifyWithStrings[i] = "Beep!"
        continue;
      } else if (condition1 === false && condition2 === false && condition3 === false){
        arrayToModifyWithStrings[i] = parseInt(arrayToModifyWithStrings[i]);
      }
    }
  }
return arrayToModifyWithStrings;
}


//user input logic
$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputNumbInt = parseInt($("#inputNumb").val());
    var userName = $("#name").val();
    console.log(inputNumbInt);
    if (isNaN(inputNumbInt)){
      $("#result").show();
      $("#inputString").text("Not a number," + userName + "! We only play with numbers for now!");
    } else {
      var inputRange = generateRangeOfNumbers(inputNumbInt);
      var finalArray = [];
      finalArray = checkAllConditions(inputRange, userName);
      $("#inputString").text(inputRange.join(", "));
      $("#outputArray").text(finalArray.join(",  "));
      $("#result").show();
    }
  });
});
