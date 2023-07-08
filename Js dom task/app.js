


const azBox = document.querySelector("#az");
const usdBox = document.querySelector("#usd");
const eurBox = document.querySelector("#eur");
const trBox = document.querySelector("#tr");

 
 azBox.onclick=select;
 usdBox.onclick=second;
 eurBox.onclick=third;
 trBox.onclick=forth;

 function select() {
    azBox.style.backgroundColor="blue";
    usdBox.style.backgroundColor = "";
        eurBox.style.backgroundColor = "";
        trBox.style.backgroundColor = "";
 }

 function second() {
    azBox.style.backgroundColor="";
    usdBox.style.backgroundColor = "blue";
        eurBox.style.backgroundColor = "";
        trBox.style.backgroundColor = "";
 }
 function third() {
    azBox.style.backgroundColor="";
    usdBox.style.backgroundColor = "";
        eurBox.style.backgroundColor = "blue";
        trBox.style.backgroundColor = "";
 }

 function forth() {
    azBox.style.backgroundColor="";
    usdBox.style.backgroundColor = "";
        eurBox.style.backgroundColor = "";
        trBox.style.backgroundColor = "blue";
 }


