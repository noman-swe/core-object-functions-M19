function bringShingara (taka){
    console.log('singara er jonno disy ', taka);

    var shingaraPrice = 10;
    var shingaraQuantity = taka / shingaraPrice;
    return shingaraQuantity;//return er por ja likha thakbe setar maaan or value return hisheb e pawa jabe
}
var money = 70;
var shingara = bringShingara(money); //function er call e parameter e j value dewa asy setai main function er parameter er value hisheb e gonno hobe
console.log('ei nen shingara '+ shingara + ' ta');

