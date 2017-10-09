window.addEventListener("load", init);

var empName;
var empDept;
var empNum;

function init(){
    empName = document.getElementById("box_1");
    empDept = document.getElementById("box_2");
    empNum = document.getElementById("box_3");
    
    document.getElementById("add").addEventListener("click", addEmp);
    document.getElementById("delete").addEventListener("click", deleteEmp);
}

function addEmp(){
    var ul = document.getElementById("empList");
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute('src', 'dustbin.png');
    
    obj.addEmp(empName.value,empDept.value,empNum.value);
    
    li.innerHTML = obj.id + " " + empName.value + " " + empDept.value + " " + empNum.value;
    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click", markEmp);
}

function markEmp(){
    event.srcElement.classList.toggle("selected");
    var currentElement = event.srcElement.innerHTML.split(" ")[0];
    obj.toggleEmp(currentElement);
}

function deleteEmp(){
    obj.deleteEmp();
    printEmp();
}

function printEmp(){
    var ul = document.getElementById("empList");
    ul.innerHTML = "";
    obj.empList.forEach(function(obj){
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute('src', 'dustbin.png');  
        li.innerHTML = obj.id + " " + obj.name + " " + obj.dept + " " + obj.number;
        li.appendChild(img);
        ul.appendChild(li);
        li.addEventListener("click", markEmp);
    })
}