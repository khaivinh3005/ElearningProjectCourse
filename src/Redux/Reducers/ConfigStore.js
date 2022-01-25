import {combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import CourseReducer from './CourseReducers'
import UserReducer from './UserReducers'
import IsLoadingReducer from './IsLoadingReducer';
import ChangeTheme from './ChangeTheme';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const rootReducer = combineReducers({
     CourseReducer,
     UserReducer,
     IsLoadingReducer,
     ChangeTheme
})

export const store =createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))