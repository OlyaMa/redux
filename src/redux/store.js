import { combineReducers, compose, legacy_createStore } from "redux";
import inputReducer from "./inputReducer";
import listReducer from "./listReducer";

const ReactReduxDevTools = window.
__REDUX_DEVTOOLS_EXTENSION__ && window.
__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
        combineReducers({
            input: inputReducer,
            list: listReducer,
        }),
        compose(
            ReactReduxDevTools,
        )
    );
};

export default configureStore;
