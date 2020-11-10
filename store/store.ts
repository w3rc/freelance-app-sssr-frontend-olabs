import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware: any = [thunk, logger];
// const composeEnhancers =
// 	process.env.NODE_ENV === 'development'
// 		? (window !== undefined &&
// 				(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// 		  null
// 		: compose;
// const composeEnhancers = composeWithDevTools({
// 	realtime: true,
// 	hostname: 'localhost',
// 	port: 8000,
// });

const store: any = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
