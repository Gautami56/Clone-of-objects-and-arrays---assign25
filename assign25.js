//Way 1 - Object conversion
const originalJson = { name: "Gautami", age: 25 };

let newJson = JSON.parse(JSON.stringify(originalJson));

newJson.city = "Mumbai";
console.log(
  "Way 1 - Object conversion :::" + "Original Object -",
  originalJson
);
console.log("Way 1 - Object conversion :::" + "New Object -", newJson);

//Way 2 - Object assign static method
const original = { fruit: "Apple" };
let real_copy = {};
Object.assign(real_copy, original);
real_copy.city = "Mumbai";
console.log(
  "Way 2 - Object assign static method :::" + "Original Object -",
  original
);
console.log(
  "Way 2 - Object assign static method :::" + "New Object -",
  real_copy
);

//Array
//Way 1 - Array slicing method
var array1 = [20, 30, 25, 5, 3, 2];
var array2 = array1.slice();
array2.push(30);
console.log(
  "Way 1 - Array slicing method::: Original Array" + "Original Array -",
  array1
);
console.log(
  "Way 1 - Array slicing method::: Original Array" + "New Array -",
  array2
);

//Array
//Way 2 - Array indexof Method
var A = [20, 30, 40];
var B = [];
A.map((item) => {
  if (B.indexOf(item) === -1) {
    B[B.length] = item;
  }
});
B.push(70);
console.log(
  "Way 2 - Array indexof Metho:: Original Array" + "Original Array -",
  A
);
console.log("Way 2 - Array indexof Metho:: Original Array" + "New Array -", B);
