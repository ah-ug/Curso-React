import { combineReducers } from "redux";
import { uiReducer } from "../types/uiReducer";
import { authReducer } from "./authReducer";
import { calendarReducer } from "./calendarReducer";


export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer
})