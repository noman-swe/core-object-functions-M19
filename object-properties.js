var computer = {
    price: 250000,
    storage: '256gb',
    processor: 'core i5'
};
//console.log(computer);

console.log(computer.processor);

var computerPrice = computer.price;
console.log(computerPrice);


// set a new value of an object property 
computer.price = 10000;
console.log(computer);


//different way to set a value of an object property 
computer['price'] = 40000;
console.log(computer);

//another way to set value 
var priceProperty = "price"; //value ney nai
computer[priceProperty] = 33333;
console.log(priceProperty);

//storage 
computer['storage'] =  '512 gb';
console.log(computer);
