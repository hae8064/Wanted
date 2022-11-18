import { createStore } from 'redux';

//리덕스에서 관리할 상태 정의
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

//액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성함수 정의
function increase() {
  return {
    type: INCREASE, //액션 객체에는 타입값이 필수적
  };
}

const decrease = () => ({
  type: DECREASE
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text      //액션안에는 type외에 추가적인 필드를 마음대로 넣을 수 있다.
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});


//리듀서만들기
//위 액션 생성함수를 통해 만들어진 객체를 참조해 새로운 상태를 만드는 함수를 만들어본다.
//리듀서에서는 불변성을 꼭 지켜줘야한다.

function reducer(state = initialState, action) {
  switch(action.type){
    case INCREASE:
      return{
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return{
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return{
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return{
        ...state,
        // list: state.list.concat(action.item);
      };
    default:
      return state;
  }
}


//스토어 만들기
const store = createStore(reducer);

console.log(store.getState());      //현재 store안에 들어있는 상태 조회