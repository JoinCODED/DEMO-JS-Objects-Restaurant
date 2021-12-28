# Discussion - Omar

## 1. Review

1. Discuss how to create a nested Object inside an array

```js
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
```

2. Try to access items inside each resturant and print all items for example. Review over iteration methods with objects

```js
restaurant.menu
  .find((menu) => menu.category === "drink")
  .items.forEach((drink) => console.log(drink));
```

## 2. Pushing properties to objects

1. Create an object, and add properties to it
2. If the object is constant, that doesn't mean we can't mutate the object properties

```js
const person = {
  name: "Omar",
  age: 25,
};

person.gender = "Male";
```

3. If the object was constant, we cannot change the object to by empty

```js
person = {}; //BUG: ----- THIS WILL GENERATE ERROR because we tried to change the whole object, but it's const
```

## 3. Object destructuring

1. save the properties outside the object

```js
const name = person.name;
const age = person.age;
```

2. You can get destructure the object instead of the above lines to the following lines

```js
const { name, age } = person;
```

In this way, we take whatever we want from an object.

3. You can use array destructuring in function parameters to give clear labels to every single parameter. Write the following method

```js
function pricing(productName, cost, profitMargin, fixedCost, commission) {
  console.log(
    `${productName} price is ${cost * profitMargin + fixedCost + commission}`
  );
}
```

4. This function takes a lot of parameters, calling the function would be hard ot understand.

```js
pricing("iPhone", 15, 1.4, 5, 10);
```

5. It's better to take an object as follows,

```js
pricing({
  productName: "iPhone",
  cost: 15,
  profitMargin: 1.4,
  fixedCost: 5,
  commission: 10,
});
```

6. we accept the object as follows. The order wouldn't matter here at all, unlike the function parameters

```js
function pricing({ productName, cost, profitMargin, fixedCost, commission }) {
  console.log(
    `${productName} price is ${cost * profitMargin + fixedCost + commission}`
  );
}
```

## 4. Dynamic access for object

1. In arrays, we used to access elements dynamically using the `[ ]` square brackets notation.

```js
const names = ["Fatima S", "Zainab", "Taher", "Hamed"];
const input = 1;
names[input];
```

2. We can access an element with a dynamic key by the same way with objects as follows

```js
const person = {
  name: "Omar",
  age: 25,
  "best movies": ["COCO", "The gretest showmna"],
};

let x = "name";
console.log(person[x]); // this will print "Omar" , but without having to write `person.name`
```

3. With this feature, we can use it instead of `switch` statement

```js
switch (direction) {
  case "north":
    console.log("Roo7 foog");
    break;
  case "south":
    console.log("Roo7 ta7at");
    break;
  case "east":
    console.log("Roo7 ymeen");
    break;
  case "west":
    console.log("Roo7 ysarr");
    break;
  default:
    console.log("No such direction ");
}
```

to be

```js
const directionDescription = {
  north: "Roo7 Food",
  south: "Roo7 Ta7at",
  west: "Roo7 Ysar",
  east: "Roo7 Ymeen",
};

console.log(directionDescription["north"]);
```
