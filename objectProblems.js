// const person={
//     name:"Hardagya",
//     age:"17",
//     city:"Ahmedabad"
// }
// // console.log(person)
// // console.log(person.name)
// person.car="Car"
// console.log(person.car)
// delete person.age
// console.log(person)

// console.log(person.name.length)
// console.log(Object.hasOwn(person,'name'))//https://builtin.com/articles/javascript-check-if-object-has-property
// function countProperties(obj) {
//     console.log(Object.keys(obj).length);
// }
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
//  const obj3=Object.assign(obj1,obj2); //https://www.javascripttutorial.net/object/javascript-merge-objects/
// console.log(obj3)
// countProperties(obj3)

const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };

const clone = {
  ...original,
  details: { ...original.details }
};


clone.details.city = 'LA';

console.log(original.details.city); 
console.log(clone.details.city);    





const items = [
    { name: 'item1', price: 10 },
    { name: 'item2', price: 15 },
    { name: 'item3', price: 20 }
  ];
  
  a = items[0].price;
  b = items[1].price;
  c = items[2].price;
  
  console.log(a + b + c); 