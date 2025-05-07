import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import charachtersReducer from "./reducers/caracterReducer/caracrersReducer"


const rootReducer = combineReducers({
    charachtersReducer
})
    
export const store = createStore(rootReducer, applyMiddleware(thunk))