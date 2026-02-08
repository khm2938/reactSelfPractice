//node src/arrayBuilt-inFunctions2.js

const scores = [55, 72, 88, 90, 67, 100, 45];

const products = [
  { id: 1, name: "Keyboard", price: 30000 },
  { id: 2, name: "Mouse", price: 15000 },
  { id: 3, name: "Monitor", price: 200000 },
  { id: 4, name: "USB Cable", price: 5000 },
  { id: 5, name: "Webcam", price: 70000 },
];

const words = ["react", "node", "javascript", "react", "css"];
//scores의 모든 값을 한 줄씩 콘솔에 출력하라
//scores.forEach((s)=>console.log(s));

//products를 다음 형식으로 출력하라(Keyboard - 30000원)
//products.forEach((p)=>console.log(p.name, "-", p.price));
//products.forEach(p => {console.log(`${p.name} - ${p.price}원`);});

//scores를 모두 10점씩 올린 배열을 만들어라
//console.log(scores.map((s)=>s+10));

//products에서 상품 이름만 담은 배열을 만들어라
//console.log(products.map((p)=>p.name));

//words를 대문자로 변환한 배열을 만들어라
//console.log(words.map((w)=>w.toUpperCase()));

//scores 중 80점 이상만 배열로 만들어라
//console.log(scores.filter((s)=>s>=80));

//products 중 가격이 50,000원 이상인 상품만 골라라
//console.log(products.filter((p)=>p.price>=50000));


//scores 중 처음으로 60점 이상인 점수를 찾아라
//console.log(scores.find((s)=>s>=60));

//products 중 이름이 "Monitor"인 상품을 찾아라
//console.log(products.find(()=>products.name ="Monitor"));
//위에서 오류3가지 
//1. find의 콜백 인자 누락 find(('누락')=>...)
//2. products.name은 객체의 속성을 부름 products.name -> undefined
//3. '='은 대입, 비교할땐 '===' 으로 비교
//정답 코드 => console.log(products.find((p) => p.name === "Monitor"));

//words에서 "react"가 처음 등장하는 인덱스를 구하라
//console.log(words.indexOf("react"));

//scores에서 중간 3개 점수만 잘라서 배열로 만들어라
//console.log(scores.slice(2,2+3));
//scores에서 큰 점수 순으로 중간 3개 점수만 잘라서 배열로 만들어라
//const scoresAsc = scores.toSorted((a,b)=>a-b);
//const  m = ()=> Math.floor((scoresAsc.length)/2);
//console.log(scoresAsc.slice(m() - 1, m() + 2));
//더 깔끔한 버전
//const middle3 = scores
//  .toSorted((a, b) => a - b)
//  .slice(Math.floor(scores.length / 2) - 1, Math.floor(scores.length / 2) + 2);
//console.log(middle3);
//scores에 [110, 120]을 합쳐서 새로운 배열을 만들어라
//console.log(scores.concat([110, 120]));

//words를 " / " 로 연결해서 하나의 문자열로 만들어라
//const joinedWords = words.join("/","string");
//console.log(joinedWords);
//console.log(words.join("/"));


//아래 코드의 결과를 예측하고 이유를 설명해라
//const result = scores.map(score => {score + 5;});
//console.log(result);
//map은 각 요소에 대해 콜백 함수를 실행하고,
//그 콜백 함수의 반환값을 모아 새로운 배열을 만든다.
//현재 콜백 함수에서 return이 없기 때문에 
//모든 요소의 반환값이 undefined가 되어
//result는 undefined로만 채워진 배열이 된다.

