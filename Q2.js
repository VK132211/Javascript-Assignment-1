// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function ctof(c){
    let f=(9/5)*(c)+32;
    console.log(f);

}
function ftoc(f){
    let c=(5/9)*(f-32);
    console.log(c);

}

let temp1=ctof(60);
let temp2=ftoc(45);