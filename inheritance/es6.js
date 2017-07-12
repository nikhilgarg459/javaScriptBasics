class Person{
    
    constructor(first, last, age){
        this.first = first;
        this.last = last;
        this.age = age;
    }

    /* Public function -> can be inherited by the child */
    getFullName(){
        console.log(this.first + this.last);
    }


    /* Private function -> Cannot be inherited by hte child */
    static getAge(){
        console.log(this.age);
    }

}

var person1 = new Person("Nikhil", "GArg",12);

person1.getFullName();

//person1.getAge();   // can't be called, private function of Person class
Person.getAge();

/* Creating child of PErson class */
class Child extends Person{
    constructor(first, last, middle, age){
        super(first, last, age);
        this.middle = middle;
    }

    getFullNameWithMiddle(){
        console.log(this.first + this.middle + this.last);
    }
}

var ch = new Child("Nikhil",  "Garg","mid", 12);

ch.getFullName();
ch.getFullNameWithMiddle();