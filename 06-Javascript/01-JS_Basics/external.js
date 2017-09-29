/*window.addEventListener("load", function(){
    document.getElementById("btn").addEventListener("click", function(){
    var name = document.getElementById("box_1").value;
    document.getElementById("res").innerHTML = name;
    });
});*/

window.addEventListener("load", doWork);
var u_name;
function doWork(){
    u_name =  document.getElementById("box_1");
    document.getElementById("btn").addEventListener("click",show);
}


function show(){
    document.getElementById("res").innerHTML = u_name.value;
}