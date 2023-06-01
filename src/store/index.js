import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/es/storage';
import { rootReducer } from "./root-reducer";

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

const persistConfig = {
	key: 'root',
	storage,
	// whiteList: ['filters', 'positions'],
	// blackList: ['filters']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export { store, persistor };
