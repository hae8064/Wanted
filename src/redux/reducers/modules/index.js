import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rooutReducer = combineReducers({
    counter,
    todos
});

export default rooutReducer;