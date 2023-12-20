// let person1 = {
//   fName: "Eshmat",
//   age: 32,
//   address: {
//     city: "Toshkent",
//     district: "Chilonzor",
//     street: "Al Xorazmiy",
//     building: 32,
//     fullAddrress() {
//       console.log(this);
//     },

//     channel: {
//       uz: "kunuz",
//       ru: "kunru"
//     }
//     },

//     displayPerson() {
//       console.log(`${this.fName} ${this.age} ${this.address.channel.ru} yoshda`);
//     },
//     displayThis(){
//       console.log(this);
//     }
// }

// person1.address.fullAddrress()
// person1.displayPerson()
// person1.displayThis()

// function createCounter(count = 0) {
//   let a = "Salom";
//   const b = true;
//   return {
//     get hello() {
//       return a;
//     },
//     set hello(value) {
//       if (
//         typeof value === "string" &&
//         value.length > 4 &&
//         value.toLowerCase().includes("a")
//       ) {
//         a = value;
//       }
//     },
//     get count() {
//       return count;
//     },
//     set count(value) {
//       if (value < 0) return;
//       count = value;
//     },
//     inc() {
//       return ++this.count;
//     },
//     dec() {
//       return --this.count;
//     },
//   };
// }

// let changes = createCounter(3);

// console.log(changes.hello);
// changes.hello = 233;
// console.log(changes.hello);
// changes.hello = "dgsdgsgsgs";
// console.log(changes.hello);
// changes.hello = "asdvfsfsfd";
// console.log(changes.hello);
// changes.hello = "agb";
// console.log(changes.hello);

// function createPerson() {
//   let person = {
//     fName: "Eshmat",
//     address: {
//       city: "Toshkent",
//       displayFullAddressWhithName: function () {
//         console.log(`${this.fName} ${this.address.city}da yashaydi`);
//       },
//     },
//   };

//   person.address.displayFullAddressWhithName =
//     person.address.displayFullAddressWhithName.bind(person);

//   return person;
// }

// const person = createPerson();
// person.address.displayFullAddressWhithName();

// function Person(fName , age) {
//   this.fName = fName
//   this.age = age
//   this.address = {
//     city: "Toshkent"
//   }
//   this.walk = function () {
//     console.log(`${this.fName} is walking`);
//   };
// }

// Person.prototype.greeting = function () {
//   console.log(`Salom! Mening ismim ${this.fName}. Yoshim ${this.age}da`);
// };

// let eshmat = new Person("Eshmat", 32)
// let toshmat = new Person("Toshmat", 32);

// eshmat.greeting();
// toshmat.greeting();
// console.log(eshmat.greeting === toshmat.greeting);

// ====================================================== Person
function Person(ism, age, gender, married, location) {
  this.ism = ism;
  this.age = age;
  this.gender = gender;
  this.married = married;
  this.location = location;
}

Person.prototype.hammaMalumot = function () {
  console.log(`Ismi: ${this.ism}
Yoshi: ${this.age}
Jinsi: ${this.gender}
Turmush: ${this.married}
Manzil: ${this.location}`);
};

Person.prototype.changeName = function (name) {
  this.ism = name;
};

Person.prototype.changeAge = function (age) {
  this.age = age;
};

Person.prototype.changeMarried = function (haqida) {
  this.married = haqida;
};

let person = new Person(
  "Toshmat",
  28,
  "male",
  "Uylanmagan",
  "Toshkent, Chilonzor"
);

person.hammaMalumot();

function Fruit(nomi, rang, tami) {
  this.nomi = nomi;
  this.rang = rang;
  this.tami = tami;
}

Fruit.prototype.hammaMalumot = function () {
console.log(`Nomi: ${this.nomi}
Rangi: ${this.rang}
Ta'mi: ${this.tami}`);
};

Fruit.prototype.changeName = function (nomi) {
  this.nomi = nomi;
};

Fruit.prototype.changeColor = function (rang) {
  this.rang = this.rang;
};

Fruit.prototype.changeMazasi = function (haqida) {
  this.tami = haqida;
};

let fruit = new Fruit("Nok", "sariq", "shirin");

fruit.hammaMalumot();
