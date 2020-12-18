import {combineReducers} from "redux";
import {titleReducer} from "./titleReducer";
import {dragonListReducer} from "./dragonListReducer";

export const rootReducer = combineReducers({
    dragonList: dragonListReducer,
    title: titleReducer
})