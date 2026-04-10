//
function result(){
let inputValue=document.getElementById('inputData').Value;
console.log(inputValue);

let displayHeading=document.getElementById('text');
displayHeading.innerHTML=inputValue;

displayHeading.style.color="red"

document.getElementByIdTagName('body')[0].style.backgroundcolor="green";

//addeventlistener method
}

let paraBkg=document.getElementById('para')
function colorchange(){

paraBkg.style.backgroundcolor='#' + (Math.random() * 0xFFFFFF | 0).toString(16);}
paraBkg.addEventListener('mouseout',colorchange);

