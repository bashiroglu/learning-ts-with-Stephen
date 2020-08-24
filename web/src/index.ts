import { User } from "./models/User";

const user = new User({ name: "Hasan", age: 55 });
const user2 = new User({ name: "Hasan", age: 55 });
// user.fetch();
// user.set({ name: "Murad", age: 44 });
console.log(user2.events === user.events);

// user.save();

// const user = new User({ age: 44, name: "Hasan", id: 1 });

// user.on("click", () => {
//   console.log("click");
// });
// user.on("click", () => {
//   console.log("click2");
// });
// user.on("change", () => {
//   console.log("change");
// });

// user.trigger("click");
