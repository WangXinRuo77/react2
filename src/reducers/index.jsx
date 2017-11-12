import { ADD } from '../actions';
import { combineReducers } from 'redux';
import defaultStore from '../store';
const App = (state = defaultStore,action) =>{
	switch (action.type) {
		case 'register': 
			console.log(action)
			return Object.assign({},state,{
				count:2
			})
			break;
		default:
			return state;
			break;
	}
}

const Reducer = combineReducers({
	App
})

export default Reducer;