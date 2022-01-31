function addition (num1, num2){
    console.log(num1 + '+' + num2);
    var sum = num1 + num2;
    return sum;
} 

var value1 = 54;
var value2 = 46;
addition(value1, value2);




//another practice
//
function conditions(allSums){
    
    if (allSums <= 300){
        console.log("it is less than equal to 300");
    }
    else if (allSums > 300 && allSums <= 500){
        console.log("it is less than equal to 500");
    }
    else{
        console.log('i can not count more');
    }
}
//var shamshia = 354;
//conditions(shamshia);


//multiply function
function multiply(number1, number2){
    console.log('number-one = ' + number1);
    console.log('number-two = ' + number2);
    //
    var multiply_sum = number1 * number2;
    return multiply_sum;
    // console.log('total multiplecation value = ' + multiply_sum);
}
var multiplyValue1 = 120;
var multiplyValue2 = 10;

var mValue = multiply(multiplyValue1, multiplyValue2);

 
 conditions(mValue);