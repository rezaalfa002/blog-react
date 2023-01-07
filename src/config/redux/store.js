import  {applyMiddleware, createStore} from "redux"
import reducer from "./reducer/reducer";
import thunk from "redux-thunk" //Async Store


const store = createStore(reducer, applyMiddleware(thunk));

export default store;