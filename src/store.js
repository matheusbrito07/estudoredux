import { createStore, applyMiddleware } from'redux'

// import do reducers
import index from './reducers/index'

const store = createStore(index);

export default store