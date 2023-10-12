/*Class:-Class is the template for creating objects with similar properties and methods.properites assign inside the constructor method. (classes are the template for objects)

Object:- Object are instance of class which can create many object and they all share their method and properties.object is created using with new keyword. 

Constructor():- its a special method  that creates and initlize when object is created with new keybord.
                 when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory.
                 every time an object is created using the new() keyword, at least one constructor is called.


*/ 



class student{
      constructor(name,age,clas){  //constructor :its a method.
        this.myname = name;
        this.myage = age;  // this keybord give the current content.
        this.myclas = clas;
        
      }
      biodata(){ //method
        console.log(`Hi my name is ${this.myname}.My age is ${this.myage} and My class is ${this.myclas}.`);
      }
}

let obj1 = new student("Rohit",26,"MCA");   //object
let obj2 = new student("Atul",27,"MSC");

console.log(obj1);
obj1.biodata();

console.log(obj2);
obj2.biodata();