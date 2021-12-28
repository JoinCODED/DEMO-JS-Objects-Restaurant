const person = {
  name: "Omar",
  age: 25,
};

person.gender = "Male";

console.log(person);

const restaurant = {
  name: "Subway",
  menu: [
    {
      category: "drink",
      items: ["Seven up", "Snapple", "Orange Juice"],
    },
    {
      category: "vegetables",
      items: ["Lettuce", "Cucumber", "Tomato"],
    },
    {
      category: "yedam",
      items: ["Rost Beef", "Turkey", "Martadila"],
    },
  ],
};

// restaurant.locations = ["Mishref, B 3", "Sabah Alsalem, B1"];
// console.log(restaurant);
restaurant.menu
  .find((menu) => menu.category === "drink")
  .items.forEach((drink) => console.log(drink));

function pricing({ productName, cost, profitMargin, fixedCost, commission }) {
  console.log(
    `${productName} price is ${cost * profitMargin + fixedCost + commission}`
  );
}
// pricing({
//   productName: "3abaya",
//   cost: 15,
//   profitMargin: 1.4,
//   fixedCost: 5,
//   commission: 10,
// });

// pricing({
//   profitMargin: 1.3,
//   productName: "Macbook",
//   commission: 1,
//   cost: 1000,
//   fixedCost: 12,
// });

const names = ["Fatima S", "Zainab", "Taher", "Hamed"];
const input = 1;
names[input];
// console.log(x, y);

const person = {
  name: "Omar",
  age: 25,
  "best movies": ["COCO", "The gretest showmna"],
};

let x = "best movies";
console.log(person[x]);

// const direction = "north";

const directionDescription = {
  north: "Roo7 Food",
  south: "Roo7 Ta7at",
  west: "Roo7 Ysar",
  east: "Roo7 Ymeen",
};

console.log(directionDescription["north"] ?? "No such direction ");

// switch (direction) {
//   case "north":
//     console.log("Roo7 foog");
//     break;
//   case "south":
//     console.log("Roo7 ta7at");
//     break;
//   case "east":
//     console.log("Roo7 ymeen");
//     break;
//   case "west":
//     console.log("Roo7 ysarr");
//     break;
//   default:
//     console.log("No such direction ");
// }
