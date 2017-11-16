import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
import ReactDOM from 'react-dom';
import Storage from "@utils/storage";
	import SaveUserInfo from '@actions/userinfo';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

let store = createStore(reducer)
// 获取存储在Localstorage中的uid
let Account = Storage.get('user');
//存在证明用户已经登陆，存储在stora中，派发全局
if(Account && Account.id) {
	store.dispatch({
		type:"SaveUserInfo",
		state:Storage.get('user')
	})
}
store.subscribe(function (){
	// console.log(store.getState())
})
// console.log(store.getState())
import 'antd/dist/antd.min.css';
// ui theme 
import '../ui/default.less';
// iconfont
import '../static/fonts/iconfont.css'

import ComponentHeader from './components/header/header.jsx';
import ComponentFooter from './components/footer/footer.jsx';

import PageIndex from './pages/index/index.jsx';
import PageContest from './pages/contest/index.jsx';
import PageProcedure from './pages/procedure/index.jsx';
import PageProcedureCustomer from '@pages/procedure/customer.jsx';
import PageProcedureDesigner from '@pages/procedure/designer.jsx';

import PageLaunch from './pages/launch/index.jsx';
import PageAbout from './pages/about/index.jsx';  

import PageRegister from './pages/register/index';

ReactDOM.render(
	<Provider store= { store }>
		<Router>
			<div>
				<ComponentHeader />
				<Route exact path="/" component={ PageIndex } />
				<Route path="/contest" component={ PageContest } />
				<Route path="/procedure" component = { PageProcedure} />	
				<Route path="/launch" component={ PageLaunch } />
				<Route path="/about" component={ PageAbout } />
				<Route path="/register" component={ PageRegister } />  			
				<ComponentFooter />
			</div>
		</Router>
	</Provider>,
	document.querySelector('#app')
)