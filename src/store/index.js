import { applyMiddleware,  compose,  createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const customLogger = (store) => (next) => (action) => {
	console.group(1, action.type)
	console.log(action)
	console.log('current state', store.getState())
	next(action)
	console.log('next state', store.getState())
	console.groupEnd();
}

const middlewares = []

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger, customLogger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	composeEnhancers(applyMiddleware(...middlewares))
)
export { store }
