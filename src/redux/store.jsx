import { usersReducer } from "./users/usersReducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const store=createStore(usersReducer,applyMiddleware(thunk))