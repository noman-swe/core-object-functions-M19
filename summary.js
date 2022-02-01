var skyColor = 'white';
 var phones = ['iPhone', 'Xoami', 'samsung', 'lg', 'htc'];
 phones[3] = 'walton'; //changing value of 4th index
// console.log(phones);

//check oppo exists or not 
if(phones.indexOf('oppo') == -1){
    console.log('No oppo in stock');
}
//if lg is available
else if(phones.indexOf('lg') != -1 ){
    console.log('lg is available now')
}
else{
    console.log('We have oppo');
}


//function
function addThreeNumbers(x, y, z){
    var total = x + y + z;
    console.log(total);
    return total;
}
addThreeNumbers(12, 45, 23);


//object
var microphone = {
    brand: 'lenovo',
    price: '121',
    color: 'yellow'
}

// microphone.price = '20';
// console.log(microphone);


// function getReminder(number1, number2) {
//     number1 % number2;
//   }
  
//   const reminder = getReminder(12, 2);
  
//   console.log(reminder);