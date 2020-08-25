import { User } from "./models/User";

const user = User.buildUser({ name: "Hasan", age: 55, id: 16 });
console.log(user.get("name"));

// user.sync.save(user.attributes.get("name"));
// const user2 = new User({ name: "Hasan", age: 55 });
// user.fetch();
// user.set({ name: "Murad", age: 44 });
// console.log(user2.events === user.events);

// user.save();

// const user = new User({ age: 44, name: "Hasan", id: 1 });

user.on("save", () => {
  console.log("save");
  console.log(user);
});
user.on("click", () => {
  console.log("click2");
});
user.on("change", () => {
  console.log("change");
});
user.on("change", () => {
  console.log("change2");
  console.log(user);
});
// user.set({ name: "Hasaan" });

// user.trigger("click");
// user.fetch();
user.save();
