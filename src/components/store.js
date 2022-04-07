import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(applyMiddleware(...middlewares));

export default store;
