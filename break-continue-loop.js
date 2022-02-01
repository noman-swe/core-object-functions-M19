var i = 1;
while(i < 10){
   // console.log(i);
    if(i == 5){
        console.log('Target fullfill value: ' + i);
        break;
    }

    i++;
}

//for loop

// for(var i= 0; i < 20; i++){
//     console.log(i);
//     if(i==7){
//         break;
//     }
// }


//array
var numbers = [15, 25, 32, 415, 52, 24, 765, 86];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);

//     if (number > 100){
//         break;
//     }
// }

for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 90){
        continue;
    }
    console.log(number);
}