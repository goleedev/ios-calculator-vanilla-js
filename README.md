# 구현 과제 : 계산기 구현


https://user-images.githubusercontent.com/52603436/224053107-752e7877-cd5b-4c4c-80b5-8da31fcbf383.mp4


## 실행 방법

### html Open

`public/index.html` 파일 실행

### 서버로 실행(port: 3000)

``` 
npm i && npm start
```

### 테스트 코드 실행 방법

```
npm test
```

- .test.js 파일에서 테스트 케이스를 추가하여 테스트코드를 실행 할 수 있습니다.
- parameter를 문자 단위로 전달하여 계산기 테스트를 진행합니다.

---

## 과제에 대한 문제 정의 

주어진 시간 내에 바닐라 자바스크립트를 활용하여 iOS 계산기의 기능을 구현할 수 있는 지에 대한 문제라고 정의했습니다.
따라서, 숫자는 정수, 실수(유리수)만 사용이 가능하며, 계산이 실행되는 상단 흰색 숫자 영역은 한 번에 한 가지 상태(state)의 숫자만 표시합니다.

--- 

## 문제 해결 계획과 방법

### 문제 해결 계획

- 계산기의 기능을 구현하기 위해 필요한 기능을 정의합니다.
- 기능을 정의한 후, 각 기능을 구현하기 위한 함수를 정의합니다.
- 각 함수를 구현합니다.
- 각 함수를 연결하여 계산기를 구현합니다.
- 모든 함수가 연결된 계산기를 테스트합니다.

### 문제 해결 방법

- 이벤트 캡쳐링 및 버블링 방지:
  이벤트 캡쳐링과 버블링을 방지하기 위해, 버튼 요소의 click 이벤트가 실행될때 마다 `stopImmediatePropagation` 메소드가 실행되도록 하였습니다.
  [참고글](https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/stoppropagation-vs-stopimmediatepropagation-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-75edaaed7841)

- 제약 사항 해결 1: 
  jest로 test 실행 시, buttons(버튼 elements)를 인식하지 못하여 `if(buttons)` 문구를 추가하였습니다. 
  이에 따라, buttons가 null인 상황을 피하여 실행할 수 있었습니다.

- 제약 사항 해결 2: 
  연산 버튼이 연속으로 클릭되었다면 마지막 연산만 기능하도록 하였습니다.

--- 

## 사용 라이브러리 리스트

- `jest`
  테스트 코드 실행을 위해 설치

- `jest-environment-jsdom`
  node 환경에서 window 객체를 가져오기 위해 jsdom 환경 구성을 위한 설치

- `express`
  웹서버 구동을 위해 설치
