'use strict'
function fcr(){
var x=document.getElementById("b1");
var y=document.getElementById("p1");
if(x.style.backgroundColor=="green"){
    x.style.backgroundColor="yellow";
    x.style.color="black";
    y.innerHTML="THIS IS YELLOW COLOR";
    document.getElementById("h1").innerHTML="HELLO";
    document.getElementById("h1").innerHTML="HELLO";
    document.getElementById("b1").style.fontSize="18px";
}else if(x.style.backgroundColor=="yellow"){
    x.style.backgroundColor="black";
    y.innerHTML="THIS IS BLACK COLOR";
    x.style.color="red";
    document.getElementById("h1").innerHTML="VANAKKAM";
    
}else{
    x.style.backgroundColor="green";
    y.innerHTML="THIS IS GREEN COLOR";
    x.style.color="white";
    document.getElementById("h1").innerHTML="HAI";
    
}
}
console.log(fcr);

function fcx(){
console.log("google");
}
fcx();
fcx();

// document.getElementById('gclick').addEventListener('click',function(){
//     window.alert(document.getElementById('guess').value);
// });
function gc(){
    console.log("The Result is " +((Number(document.getElementById('guess').value)+2)));
    // For better understand to use container 
//Method 2 
    // var r=document.getElementById('guess');
    // console.log(Number(r.value)+2);
    // // window.alert(document.getElementById('guess').value);
    var x=document.getElementById('gclick');
    if(x.value=="clickHere")
    x.value="okHere";
    else
    x.value="clickHere";
}
// let inputNumber = prompt("Enter a number:");
// let numericNumber = Number(inputNumber) + 2;
// console.log("The result is: " + numericNumber);
function exe(){

    var x= document.querySelector('.grc').value;
   console.log(typeof(x));
   x=Number(x);
   console.log(typeof(x));
   x=String(x);
   console.log(typeof(x));

console.log(x);

document.getElementById("b1").style.backgroundColor="white";
document.getElementById("b1").style.color="black";
document.getElementById("b1").style.fontSize="20px";

}
function mode(){
    var x=document.getElementById("b1");
    var y=document.getElementById("mode1");
    if(x.style.backgroundColor=="black")
    {
        x.style.backgroundColor="white";
        x.style.color="black";
        y.value="darkmode";
    }
    else{
        x.style.backgroundColor="black";
        x.style.color="white";
        y.value="dayMode";

    }
}
if('10'===10){
    console.log("10==10 is right");// if we use === equals type conversion not allowed.
}
else{
    console.log("they are not equals ");
}
var day=window.prompt("Enter a day");

    
    var xyz=document.getElementById("dp");
    var output;
    
    xyz.textContent=output;

