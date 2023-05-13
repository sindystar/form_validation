const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit");

btnSubmit.addEventListener("click", (e) => {

  if (!isTxt("userid", 5)) e.preventDefault();
  if (!isTxt("comments", 20)) e.preventDefault();
  if (!isEmail("email")) e.preventDefault();


  if (!isCheck("gender")) e.preventDefault();
  if (!isCheck("hobby")) e.preventDefault();
});

//1. type이 text인 form요소 인증 함수 
function isTxt(el, len) {
  if (len === undefined) len = 5;
  let input = form.querySelector(`[name=${el}]`);
  //input를 찾는데 어떤 input이냐면  name=매개변수로 넣은 값이 것을 찾아 준다 
  let txt = input.value;
  //찾은 input의 안에 사용자가 적은 값을 추적해서 변수로 저장함 
  //입력한 value의 값의 글자수가 설정한 len의 값 이상이라면 
  if (txt.length >= len) {
    //일단 에러 메시지 p요소가 있는지 없는지를 판별 
    const errMsgs = input.closest("td").querySelectorAll("p");
    //있다면 제거하고 
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
    //코드 참일 때 실행할 코드
    return true;
  } else {

    //-------------------------------
    //일단 에러메시지 p요소가 있는지 없는지를 판별 
    const errMsgs = input.closest("td").querySelectorAll("p");
    //있다면 제거하고
    if (errMsgs.length > 0) return false;
    //return을 이용해서 에러메시지가 존재 하면 구문을 중단 시켜서 p태그가 중첩 되지 않게 만듦
    //-------------------------------

    //input.closest("td").querySelector("p").remove();
    //경고 문구나 안내하는 문구를 적어줌
    const errMsg = document.createElement("p");
    errMsgs.append(`입력 항목을 ${len}글자 이상 입력 하세요`);
    input.closest("td").append(errMsgs);
    return false;
  }
}

//2. type이 text인데 email 인증함수 
function isEmail(el) {
  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;

  //@가 있는지 없는지?
  if (/@/.test(txt)) {
    const errMsgs = input.closest("td").querySelectorAll("p");
    //있다면 제거하고
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
    return true;
  } else {
    const errMsgs = input.closest("td").querySelectorAll("p");
    //있다면 제거하고
    if (errMsgs.length > 0) return false;
    const errMsg = document.createElement("p");
    errMsgs.append("@를 포함한 전체이메일 주소를 입력하세요");
    input.closest("td").append(errMsgs);
    return false;
  }
}

//3.check 인증 함수 

function isCheck(el) {
  let input = form.querySelectorAll(`[name=${el}]`);
  let isCheck = false;

  //input의 갯수만큼 반복을 돌면서 체크가 되어있는지를 확인해서 하나라도 체크가 되어있다면 isCheck를  true바꿔줌 
  for (let el of inputs) {
    if (el.isCheck) isCheck = true;
  }

  if (isCheck) {
    const errMsgs = input[0].closest("td").querySelectorAll("p");
    //있다면 제거하고 
    if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();


    return true;
  } else {
    const errMsgs = input[0].closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) return false;

    const errMsg =document.createAttribute("p");
    errMsg.append("필수 입력항목을 체크해주세요");
    input[0].closest("td").append(errMsg);
    return false;
  }
}