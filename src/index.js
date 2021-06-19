import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// 유일하게 데이터를 바꿀 수 있는 곳! switch를 쓴다!
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

// 변화한 count를 number에 입력
const onChange = () => {
  number.innerText = countStore.getState();
};
// 변화를 감지!
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
