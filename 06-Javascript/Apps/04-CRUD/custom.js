window.addEventListener("load", init);

var empName;
var empDept;
var empNum;

function init(){
    empName = document.getElementById("box_1");
    empDept = document.getElementById("box_2");
    empNum = document.getElementById("box_3");
    
    document.getElementById("add").addEventListener("click", addEmp);
    
}

function addEmp(){
    var ul = document.getElementById("empList");
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute('src', 'dustbin.png');
    li.innerHTML = empName.value + " " + empDept.value + " " + empNum.value;
    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click", markEmp);
}

function markEmp(){
    event.srcElement.classList.toggle("selected");
}