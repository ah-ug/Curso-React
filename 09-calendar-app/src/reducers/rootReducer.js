import { combineReducers } from "redux";
import { uiReducer } from "../types/uiReducer";
import { calendarReducer } from "./calendarReducer";


export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    // TODO: AuthReducer
    // TODO: CalendarReducer
})