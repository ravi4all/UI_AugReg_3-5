var obj = {
    "id" : 0,
    "empList" : [],
    
    "addEmp" : function(name,dept,number){
        this.id++;
        var emp = new Emp(this.id, name, dept, number);
        this.empList.push(emp);
        console.log(this.empList);
    },
    
    "toggleEmp" : function(id){
        var toggleList = this.empList.filter(function(obj){
            return obj.id == id;
        })
        toggleList[0].selected = !toggleList[0].selected;
        console.log(toggleList);
    },
    
    "deleteEmp" : function(){
        this.empList = this.empList.filter(function(obj){
            return obj.selected == false;
        });
    }
    
}