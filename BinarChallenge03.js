//Lim Felicia William
//Kelas FE JS 2
//Jawaban Challenge 3

//No. 1
draft=15;
crew=1;
var emptyShip = new Ship(draft,crew);

/**function Ship(draft,crew){
    this.draft = draft;
    this.crew  = crew;

    crew = 1.5*draft;

    if(20>crew){
        console.log("Banyak nih muatan kapalnya :)");
    }
    else{
        console.log("Lebih banyak muatan orangnya...");
    }
}**/

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
   }
   
Ship.prototype.isWorthIt = function(){
    if(this.draft-(this.crew*1.5) > 20){
        return "Banyak nih muatan kapalnya :)";
    }
    else{
        return "Lebih banyak muatan orangnya...";
    }
}

//No. 2
class Animal{
    constructor(name,age,legs,species,status){
        this.name=name;
        this.age=age;
        this.legs=legs;
        this.species=species;
        this.status=status;
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

/**class Shark extends Animal{
    constructor(name,age,status){
        this.name=name;
        this.age=age;
        this.status=status;
    }
}

class Cat extends Animal{
    constructor(name,age,status){
        this.name=name;
        this.age=age;
        this.status=status;
    }
}

class Dog extends Animal{
    constructor(name,age,status,master){
      this.master = master;
      this.name = name;
      this.age = age;
      this.status = status;
      this.legs = 4;
      this.species = 'dog';
    }
    }
    GreetMaster(){
        return `Hello ${this.master} !`;
    }
}**/

class Shark extends Animal {
    constructor(name, age, status) {
      super();
      this.name = name;
      this.age = age;
      this.legs = 0;
      this.status = status;
      this.species = 'shark';
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super();
      this.name = name;
      this.age = age;
      this.status = status;
      this.legs = 4;
      this.species = 'cat';
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status,master='') {
      super();
      this.master = master;
      this.name = name;
      this.age = age;
      this.status = status;
      this.legs = 4;
      this.species = 'dog';
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }