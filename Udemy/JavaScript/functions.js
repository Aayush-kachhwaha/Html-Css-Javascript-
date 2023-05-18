// function greeting(){
//     alert("Hello World");
// }
// greeting();
// greeting();
// greeting();

// let announcement= function(){
//     alert("you are learing javajscript funciton");
// }
// announcement();

// let cubeTHis =function(someNumber){
//     document.getElementById("output").innerHTML = someNumber * someNumber * someNumber;
// }
// let x =  prompt("what  number would you like to cube?");
// cubeTHis(x);

let rectangleArea = function(length, width){
    let area =length*width;
    //document.getElementById("output").innerHTML= area;

}
let length =prompt("length?");
let width = prompt("width?");
document.getElementById("output").innerHTML= rectangleArea(length,width);

//rectangleArea(length,width);