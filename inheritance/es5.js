
function Person(first, last, age){
    this.first = first;
    this.last = last;
    this.age = age;
}

/* Public function -> can be inherited by the child */
Person.prototype.getFullName = function(){
    console.log(this.first + this.last);
}

/* Private function -> Cannot be inherited by hte child */
Person.getAge=function(){
    console.log(this.age);
}

var person1 = new Person("Nikhil", "GArg",12);

person1.getFullName();

//person1.getAge();   // can't be called, private function of Person class
Person.getAge();

/* Creating child of PErson class */
function Child(first ,last,middle, age){
    Person.call(this, first, last, age);
    this.middle = middle;
}

Child.prototype = new Person();

Child.prototype.getFullNameWithMiddle = function(){
    console.log(this.first + this.middle + this.last);
}

var ch = new Child("Nikhil",  "Garg","mid", 12);

ch.getFullName();
ch.getFullNameWithMiddle();



