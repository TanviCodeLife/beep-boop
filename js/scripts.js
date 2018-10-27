//business logic
//generate range of numbers for user input
function generateRangeOfNumbers(inputInteger){
  var numbersArray = [];
for(var i = 0; i <= inputInteger; i++){
  numbersArray = numbersArray.concat(i);
}
 return numbersArray;
}


//check conditions 1,2 and 3 and process array for qualifying numbers
  function checkAllConditions(arrayToProcess, uName){
  var arrayToModify = arrayToProcess.toString().split(",");
  //console.log(arrayToModifyWithStrings)
  var length = arrayToModify.length;
  var splitDigits = [];
  for (var i = 0; i < length; i++){
    splitDigits = arrayToModify[i].split("");
    //console.log(splitDigits);
    var lengthDigitsArr = splitDigits.length;
    var condition1 = false;
    var condition2 = false;
    var condition3 = false;
    for (var j = 0; j < lengthDigitsArr; j++){
      if (arrayToModify[i] % 3 === 0 && i !== 0){
        condition1 = true;
        arrayToModify[i] = "I'm sorry, " + uName + ". I'm afraid I can't do that."
        continue;
      }
      else if (parseInt(splitDigits[j]) === 1 && condition1 === false){
        condition2 = true;
        //console.log(condition2);
        arrayToModify[i] = "Boop!"
        continue;
      }
      else if (parseInt(splitDigits[j]) === 0 && condition1 === false && condition2 === false && condition3 === false){
        //console.log(splitDigits[j]);
        var condition3 = true;
        arrayToModify[i] = "Beep!"
        continue;
      }
      else if (condition1 === false && condition2 === false && condition3 === false){
        arrayToModify[i] = parseInt(arrayToModify[i]);
      }
    }
  }
return arrayToModify;
}

//function for reverse string option
function reverseOutputArray(outArray){
  var reverseOutArray = [];
  reverseOutArray = outArray.reverse();
  return reverseOutArray;
}

//user-interface logic
$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //inputs
    var inputNumbInt = parseInt($("#inputNumb").val());
    var userName = $("#name").val();
    var outputArrayDirection = parseInt($("input:radio[name=customRadioInline1]:checked").val());

    //outputs using conditions
    if (isNaN(inputNumbInt)){
      $("#result").slideToggle();
      $("#inputString").text("Not a number," + userName + "! We only play with numbers for now!");
    }
    else if (outputArrayDirection === 1){
      var inputRange = generateRangeOfNumbers(inputNumbInt);
      var finalArray = [];
      finalArray = checkAllConditions(inputRange, userName);
      $("#inputString").text(inputRange.join(", "));
      $("#outputArray").text(finalArray.join(",  "));
      $("#result").slideToggle();
    }
    else if (outputArrayDirection === 2){
      var inputRange = generateRangeOfNumbers(inputNumbInt);
      var finalArray = [];
      finalArray = checkAllConditions(inputRange, userName);
      var finalRevArray = reverseOutputArray(finalArray)
      $("#inputString").text(inputRange.join(", "));
      $("#outputArray").text(finalRevArray.join(",  "));
      $("#result").slideToggle();
    }

  });
});
