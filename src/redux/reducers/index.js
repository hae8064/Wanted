//rootReducer

import { combineReducers } from "redux";
import bookReducer from "./book-reducer";

export default combineReducers({ bookReducer });


//redux에서 제공하는 combineReducers를 통해 주제별로 나눈 조각 reducer
//들을 rootReducer로 모아준다.