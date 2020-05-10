import { combineReducers } from "redux";
import compaigns from './compaigns/compaigns-reducer'

const rootReducer = combineReducers({
    compaigns,
})

export default rootReducer;
