// math 모듈

//함수선언식(호이스팅 가능)
export function add(a,b){
  return a + b;
}
//화살표함수(호이스팅 불가능)
//export const add = (a,b) => {return a+b};
//위 두 함수는 동일한 기능을 가지고있지만 함수 이름이 동일, 문법적 문제 없음, 그러나 실행시 오류 발생: 다른 함수로 인식하며 콜할때 어떤 함수를 부를지 오류 발생함
//호이스팅을 남발하면 버그가 일어나기 쉽다
//1.의도와 다른 함수가 호출되는 경우
//2.아직 준비 안 된 상태에서 호출되는 경우
//3.함수가 많아질수록 실행흐름 파악 어려움 => 실행 흐름 꼬임

export function sub(a,b){
  return a - b;
}


export function multiply(a, b) { 
  return a * b; 
}

//math.js 대표하는 단 하나의 기본값으로 설정 
export default function addNtimes(a,b,n){
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += add(a,b);
  }
  return result;
}


