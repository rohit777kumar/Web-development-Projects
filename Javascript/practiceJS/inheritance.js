// Inheritance:- It is a mechanism that allows a class to inherit the properties and behabiour from another class.
   //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class student{     //class

     constructor(name,age,clas){    //constructor method
        this.myname = name;
        this.myage = age;    //this keyword
        this.myclas = clas;
     }

biodata(){   //method
        
        return `Hi my name is ${this.myname}.My age is ${this.myage} and My class is ${this.myclas}.`;  //return is used to return value in somewhere
}

}
 
class player extends student{             //inheritance     class player extends student
    constructor(name,age,clas,game){
        super(name,age,clas)  //inherit properties of parent  by super keyword
        this.mygame = game;  //game property
    }
    play_biodata(){   //method()
        return `${super.biodata()}. Iam  a player of ${this.mygame}.`;
    }
}

let obj1 = new player("Mohit",25,"MBA","Football");   //object 
console.log(obj1);
console.log(obj1.play_biodata());