// let num: number = 5;
// let myNumbers: number[] = [1, 2, 3, 6];

// class Car {}

// let car: Car = new Car();

// const cord: { x: number; y: number } = {
//   x: 4,
//   y: 6,
// };

// //functions

// let array: (Date | string)[] = [new Date()];

//tupples
// const drink: [string, boolean, number] = ["brown", true, 50];

//interface
// interface Vehicle {
//   name: string;
//   model: string;
//   year: number;
//   //   getName(): string;
// }

// const car = {
//   name: "Honda",
//   model: "Civic",
//   year: 2000,
//   getName(): string {
//     return this.name;
//   },
// };
// const car2 = {
//   name: "Honda",
//   model: "Civic",
//   year: 3000,
// };

// // the function belowe doesn't give error because it is only look at name model and year properties.

// function logVehicle(vehicle: Vehicle) {
//   console.log(vehicle.name);
//   console.log(vehicle.model);
//   console.log(vehicle.year);
// }
// logVehicle(car);
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
}
const p = new Person("Abdulla");
