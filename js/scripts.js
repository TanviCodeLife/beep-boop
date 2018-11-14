//business logic

function checkAllConditions(inputInteger, uName){
  var result = [];
  for (var i = 0; i < inputInteger; i++){
    var indexAsString = i.toString();
    var hasBeenReplaced = false;
    if (i % 3 === 0 && i !== 0){
      hasBeenReplaced = true;
      result.push("I'm sorry, " + uName + ". I'm afraid I can't do that.")
    } else if (indexAsString.includes(1) && !hasBeenReplaced){
        hasBeenReplaced = true;
        result.push("Boop!")
    } else if (indexAsString.includes(0) && !hasBeenReplaced){
      hasBeenReplaced = true;
      result.push("Beep!")
    } else if (!hasBeenReplaced){
      result.push(parseInt(i));
    }
  }
  return result;
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
      var finalArray = [];
      finalArray = checkAllConditions(inputNumbInt, userName);
      $("#inputString").text(inputRange.join(", "));
      $("#outputArray").text(finalArray.join(",  "));
      $("#result").slideToggle();
    }
    else if (outputArrayDirection === 2){
      var finalArray = [];
      finalArray = checkAllConditions(inputNumbInt, userName);
      var finalRevArray = reverseOutputArray(finalArray)
      $("#inputString").text(inputRange.join(", "));
      $("#outputArray").text(finalRevArray.join(",  "));
      $("#result").slideToggle();
    }

  });
});
