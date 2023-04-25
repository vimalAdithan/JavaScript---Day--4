// 1.Compare two JSON:
var obj = {
  name: "person1",
  age: 5,
};
var obj1 = {
  age: 5,
  name: "person1",
};
console.log(JSON.stringify(obj) == JSON.stringify(obj1));
