/*
validation 인증함수

만약조건을 만족한다면 return true;
만약 조건을 만족하지 않는다면 return fals;

submit 버튼을 클릭했을때
-> 인증 함수를 불러와서(대입해서) 결과값이 false e.preventDefault() 써서 결과값으로 가지 않도록 한다 
-> 인증 함수를 불러와서 결과 값이 true인 경우 result.html로 이동 

인증 함수의 전체 로직 

if(조건문) {
  //코드 참일때 실행할 코드
  return true;
} else {
  //경고 문구나 안내하는 문구를 적어줌
  return false;
}
*/
const form = document.querySelector("#member");
const btnSubmit = form.querySelector("imput[type=submit]");

btnSubmit.addEventListener("click", (e) => {
  //클릭 이벤트 안에서 설정하는 함수들이 모두 거짓일때만 클릭이벤트가 발생하도록 설정
  //버튼을 누르면 액션으로 설정한 페이지로 링크되기 때문에 링크를 방지 하는 e.preventDefault()이 구문을 각함수에 적용해야 한다 
  if (!isTxt ("userid", 5)) e.preventDefault();
  //텍스트 인증 함수가 참이 아니라면 멈추게 설정 
});

//1. type이 text인 form요소 인증 함수 

function isTxt(el, len) {
  //만약 매개변수로 입력 받은 글자수가 없다면 디폴드 값으로 설정 : 5로 지정
  if (len === undefined) len = 5;

  let input = form.querySelector(`[name=${el}]`);
  //input을 찾는데 어떤 input이냐면 name= 매개 변수로 넣은 값이 것을 찾아 준다 
  let txt = input.value;
  //찾은 input의 안에 사용자가 적은 값을 추적해서 변수로 저장함 

  //입력한 value의 값의 글자수가 설정한 len의 값 이상이라면 
  if (txt.lenth >= len) {
    //일단 에러메시지 p요소가 있는지 없는지를 판별 
    const errMsgs = input.closest("td").querySelectorAll("p");
    //있다면 제거하고
    if (errMsgs. length > 0) input.closest("td").querySelector("p").remove();
    //코드 참일때 실행할 코드
    return true;
  } else {
    //일단 에러메시지 p요소가 있는지 없는지를 판별
    const errMsgs = input.closest("td").querySelectorAll("p");
    //있다면 제거하고
    if (errMsgs.length > 0) return false;
    //return을 이용해서 에러메시지가 존재하면 구문을 중단 시켜서 p태그가 중첩되지 않게 만듦

    //input.closest("td").querySelector("p").remove();
    //경고 문구나 안내하는 문구를 적어줌 
    const errMsg = document.createElement("p");
    errMsg.append(`입력 항목을 ${len}긍자 이상 입력 하세요`);
    input.closest("td").append(errMsg);
    return false;
  }
}