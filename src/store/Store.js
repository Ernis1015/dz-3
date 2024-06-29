import { createStore, applyMiddleware } from 'redux';
import registrationReducer from '../redux/reducer';
import {thunk} from "redux-thunk";

const store = createStore(registrationReducer, applyMiddleware(thunk))

export default store;