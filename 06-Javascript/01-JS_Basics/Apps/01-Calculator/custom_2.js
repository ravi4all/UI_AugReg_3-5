window.addEventListener("load", init);

var fnum;
var snum;
var result = 0;

function init(){
    fnum = document.getElementById("box_1");
    snum = document.getElementById("box_2");
   
    buttons = document.getElementsByTagName("button");
    
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", calculator);
    }
    /*document.getElementById("add").addEventListener("click", calculator);
    document.getElementById("sub").addEventListener("click", calculator);
    document.getElementById("div").addEventListener("click", calculator);
    document.getElementById("mul").addEventListener("click", calculator);*/
}

function calculator(){
    opr = event.srcElement.innerHTML;
    console.log(opr);
    
    expression = fnum.value + opr + snum.value;
    document.getElementById("output").innerHTML = eval(expression);
}