class Person {
  constructor(name,age,gender,city) {
    this.name = name;
    this.age= age;
    this.gender = gender;
    this.city = city;
  }
}
var Person1 = new Person("Vignesh",27,"Male","Coimbatore");
var Person2 = new Person("Gokul",26,"Male","Trichy");
var Person3 = new Person("Sudha",28,"Female","Chennai");
console.log(Person3.age); // output : 28
