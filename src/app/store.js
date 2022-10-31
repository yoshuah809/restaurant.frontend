import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loadingReducer from "./reducers/loadingReducers";
import messsageReducer from "./reducers/messageReducers";
import categoryReducers from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducers";

const reducer = combineReducers({
	loading: loadingReducer,
	messages: messsageReducer,
	categories: categoryReducers,
	products: productReducer,
	// filters: filterReducer,
	// cart: cartReducer,
	// order: orderReducer,
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
