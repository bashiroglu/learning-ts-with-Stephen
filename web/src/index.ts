import { User } from "./models/User";

const user = new User({ age: 44, name: "Hasan" });

user.on("click", () => {
  console.log("click");
});
user.on("click", () => {
  console.log("click2");
});
user.on("change", () => {
  console.log("change");
});

user.trigger("click");
