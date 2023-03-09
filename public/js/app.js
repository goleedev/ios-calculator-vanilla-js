// DOM-------------------------------------------------------------------

const screen = document.querySelector(".screen");
const buttons = document.querySelector(".keyboard");

// Variables-------------------------------------------------------------

// 출력할 값을 담을 변수
let result = "0";

// 임시 저장
let temp_number = "";

// 기호를 담을 변수
let current_operator = "";
let evaluation = [];

// EventListener---------------------------------------------------------

// jest 사용을 위해 if추가
if (buttons) {
  // 버튼 클릭
  buttons.addEventListener("click", function (e) {
    e.stopImmediatePropagation(); 
    // 캡쳐링과 버블링을 포함해 다른 모든 이벤트 핸들러의 실행을 막음. 
    onClickButton(e);
  });
}

// Functions-------------------------------------------------------------

// 버튼 클릭 함수
function onClickButton(e) {
  switch (e.target.getAttribute("class")) {
    case "num": // 숫자 버튼
      clickNumber(e);
      break;
    case "operator": // 사칙연산
      clickCalculation(e);
      break;
    case "extra-operator": // 부가 기능
      clickExtraCalculation(e);
      break;
  }

  applyScreen(e);
}

// 실행 함수
function applyScreen(e) {
  const resultLength = result.toString().length;
  switch (resultLength) {
    case 7:
      screen.style.fontSize = "4.7rem";
      break;
    case 8:
      screen.style.fontSize = "4.1rem";
      break;
    case 9:
      screen.style.fontSize = "3.65rem";
      break;
  }

  if (resultLength > 9) {
    screen.innerText = parseFloat(result).toPrecision(3);
  } else {
    screen.innerText = result;
  }
}

// 숫자 클릭 함수
function clickNumber(e) {
  temp_number = temp_number + e.target.innerText;
  result = temp_number;
}

// 마지막 값 체크 함수
function lastValueIsNumber() {
  const lastValue = evaluation[evaluation.length - 1];
  return !isNaN(parseInt(lastValue));
}

// 사칙연산 체크 함수
function clickCalculation(e) {
  current_operator = e.target.innerText;

  if (temp_number) saveNumber(); // 임시 저장 한 숫자 처리

  if (current_operator === "=") {
    return calculate();
  }

  // 숫자가 아닌 연산이 연속으로 들어왔을때 마지막 연산으로 대체
  if (!lastValueIsNumber()) evaluation.pop();

  evaluation.push(current_operator);
  temp_number = "";
}

// 임시 저장 숫자 처리 함수
function saveNumber() {
  evaluation.push(temp_number);
  temp_number = "";
}

// 부가 기능 함수
function clickExtraCalculation(e) {
  current_operator = e.target.innerText;
  if (temp_number) saveNumber(); // 임시 저장 한 숫자 처리

  switch (current_operator) {
    case "%": {
      // 숫자가 아닌 연산이 연속으로 들어왔을때 마지막 연산으로 대체
      if (!lastValueIsNumber()) evaluation.pop();

      let number = parseInt(evaluation[evaluation.length - 1]);
      result = (number / 100).toString();
      evaluation.splice(evaluation.length - 1, 1, result);
      break;
    }
    case "+/-": {
      if (evaluation.length) {
        result = (evaluation[evaluation.length - 1] * -1).toString();
        evaluation.splice(evaluation.length - 1, 1, result);
      }
      break;
    }
    // 계산기 초기화
    case "C": {
      result = "0";
      clear();
      break;
    }
  }
}

// 계산 함수
function calculate() {
  if (evaluation.length >= 3) {
    result = eval(
      evaluation.join().replace(/,/g, "").replace(/x/g, "*")
    ).toString();
    clear();
    return result;
  }
  return "";
}

// 초기화 함수
function clear() {
  temp_number = "";
  evaluation = [];
  current_operator = "";
}

exports.test = (...args) => {
  for (let i = 0; i < args.length; i++) {
    evaluation.push(args[i]);
  }

  return calculate();
};
