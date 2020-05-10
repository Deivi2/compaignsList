import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from "./root-reducer";
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk'

const middlewares = [promiseMiddleware, reduxThunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}
const middlevareEnhancers = applyMiddleware(...middlewares);
const composedEnhancers = compose(middlevareEnhancers, devToolsEnhancer({ trace: true }));

const store = createStore(rootReducer, {}, composedEnhancers);


export { store };
