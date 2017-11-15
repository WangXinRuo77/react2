import { SaveUserInfo } from '../actions/userinfo'
import { combineReducers } from 'redux';

import userStore from '../store/userinfo';

const user = (state = userStore,action) =>{
	switch (action.type) {
		case 'SaveUserInfo': 
			return action.state;
			break;
		default:
			return state;
			break;
	}
}
const App = (state = {},action) => {
		switch (action.type) {
		case 'SAVE_USER_INFO': 
			return state;
			break;
		default:
			return state;
			break;
	}
}
const Reducer = combineReducers({
	user,
	App
})

export default Reducer;