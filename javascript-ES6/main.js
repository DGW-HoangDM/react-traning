/*
3. Object in JavaScript
-----------------------
  Accessing Object Properties (Truy cập thuộc tính của object) 
    objectName.propertyName
    objectName["propertyName"]
*/

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person.firstName);
console.log(person['lastName']);


/*
5. ES6 Array Methods - Map và Filter
-----------------------
  map()
    -  return a array
  
  filter()
    - return a array theo điều kiện lọc
*/


/*
6. Template strings in JavaScript
-----------------------
  Back-Tics Syntax `` `${name}`
*/


/*
7. Spread syntax (...) in JavaScript
-----------------------
  - Copy array/object sang một array/object khác
  - với array thì sẻ cộng gộp
  - với object thì các thuộc tính bị trùng sẻ ghi đè
*/
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let newArr = [...arr1, ...arr2]; // [1, 2, 3, 'a', 'b', 'c']

const myVehicle = { brand: 'Ford', model: 'Mustang', color: 'red' };
const updateMyVehicle = { type: 'car', year: 2021, color: 'yellow' };
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};//{brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}

//Ứng dụng trong React
const state = {
  name: 'John',
  age: 30,
  address: {
    city: 'HCM',
    country: 'Vietnam'
  }
}
const result = {...state, age: 35};
console.log('state', state);
console.log('result', result);

/*
8. Destructuring in JavaScript
-----------------------
*/
//With Object
var obj = {a: 1, b: 2, c: 3};

//ES5
var a = obj.a;
var b = obj.b;
var c = obj.c;

//ES6
var {a, b, c} = obj;// tên biến trùng tên key của object a = obj.a

//With Array
const arr = [1, 2, 3, 4];

//ES5
const first = arr[0];
const second = arr[1];

//ES6
const [firstO, secondO] = arr;
console.log('firstO', firstO);


/*
9. ES6 Ternary Operator - Toán tử điều kiện in JavaScript
-----------------------
  Syntax: condition ? <expression if true> : <expression if false>
*/