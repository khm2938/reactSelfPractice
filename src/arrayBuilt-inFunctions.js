//node src/arrayBuilt-inFunctions.js

const numbers = [1, 2, 3, 4, 5, 6];
const fruits = ["apple", "banana", "cherry", "banana"];
const users = [
  { id: 1, name: "Kim", age: 25 },
  { id: 2, name: "Lee", age: 32 },
  { id: 3, name: "Park", age: 19 },
  { id: 4, name: "Choi", age: 40 },
];

//fruits를 " | "로 연결해라.
const text = fruits.join(" | ");
console.log(text);

//const sortedShallow = numbers.toSorted((a,b)=>a-b);

//numbers와 [7, 8]을 합쳐라.
//console.log(numbers.concat([7,8]));

//numbers에서 [3, 4, 5]만 추출해라.
//console.log(numbers.slice(2,5));

//"banana"의 첫 번째 위치를 찾아라.
//console.log(fruits.indexOf("banana"));

//20세 이상 유저만 배열로 뽑아라.
//const adultUsers = users.filter((u)=>u.age>=20);
//console.log(adultUsers);

//나이가 30 이상인 첫 번째 유저를 찾아라.
//const user = users.find((u)=>u.age>=30);
//console.log(user);

//모든 숫자를 제곱한 배열을 만들어라.
//numbers.forEach((num)=>{console.log(num);});
//const squared = numbers.map((num)=>num*num);
//console.log(squared);
//???const squared = numbers.map((num)=>num*num); vs const squared = numbers.map((num)=>{num*num});

//모든 숫자를 콘솔에 출력해라.
//numbers.forEach((num)=>console.log(num));
//console.log(...numbers);
//numbers.map((num)=>console.log(num));
