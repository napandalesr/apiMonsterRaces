import { createStore, combineReducers } from 'redux';
import { scrollReducer } from './reducers/scrollReducer';
import { widthReducer } from './reducers/widrhReducer';

const reducers = combineReducers({
    width: widthReducer,
    scroll: scrollReducer
});

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
