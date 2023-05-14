const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit");

btnSubmit.addEventListener("click", (e) => {

  if (!isTxt("userid", 5)) e.preventDefault();
  if (!isTxt("comments", 20)) e.preventDefault();
  if (!isEmail("email")) e.preventDefault();

  if (!isCheck("gender")) e.preventDefault();
  if (!isCheck("hobby")) e.preventDefault();

  if (!isCheck("edu")) e.preventDefault();

  if (!isPwd ("pwd1", "pwd2", 5)) e.preventDefault();
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



//4. select 인증 함수 

function isSelct(el) {
  let sel = form.querySelector(`[name]=${el}`);
  let sel_index = sel.options.selectedIndex;
  //select 요소에 접근해서 자식 요소인 option들 중에 선택 되어진 index를 찾아서 해당 인덱스를 가지고 옴(number)
  let val = sel[sel_index].value;

  if (val !=="") {

    const errMsgs = sel.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove;

    return true;
  } else {

    const errMsgs = sel.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) return false;


    const errMsg = document.createElement("p");
    errMsg.append("항목을 선택해 주세요");
    sel.closest("td").append(errMsg);

    return false;
  }

}

//5.패스워드 인증 함수 

function isPwd(el1, el2, len) {
  let pwd1 = form.querySelector(`[name=${el1}]`);
  let pwd2 = form.querySelector(`[name=${el2}]`);
  let pwd1_val = pwd1.value;
  let pwd2_val = pwd2.value;

  //숫자, 문자, 특수문자 조건을 정규 표현식으로 변수로 저장
  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+?><]/;


  //두개의 비밀번호가 같고 (그리고) 비밀번호의 글자수가 len개 이상 (그리고) 

  //비밀번호에 num이 포함 (그리고) 비밀번호에 eng포함 (그리고) 비밀번호에 spc가 포함 

  if (pwd1_val === pwd2_val && pwd1_val.length >= len && num.test
    (pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)) {
      const errMsgs = pwd1.closest("td").querySelectorAll("p");
      //있다면 제거하고 
      if (errMsgs.length > 0) pwd1.closest("td").querySelector("p").remove();
      return true;
    } else {

      const errMsgs = pwd1.closest("td").querySelectorAll("p");
      //있다면 제거하고 
      if (errMsgs.length > 0) return false;
      const errMsg = document.createAttribute("p");
      errMsgs.append(`비밀번호는 ${len}글자이상, 영문, 숫자, 특수문자를 포함하여 동일하게 입력하세요`);
      pwd1.closest("td").append(errMsg);
      return false;
    }
}

/*
조건 : 두개의 비밀번호가 같다
길이가 몇글자 이상인가?
숫자가 포함되는지?
특수문자가 포함 되는지?
영문자가 포함 되는가?

true || true = true

false || true = true

true || false = true

false || false = false


하나가 true면 true   둘다  false 여야 false 


true && true = true

false && true = fasle

true && false = false

false && false


둘다 true면  true  둘중 하나가 false 면 false
[출처] 자바스크립트 배우기 10 (conditional 조건문2  and , or) | 작성자 묭돌

*/