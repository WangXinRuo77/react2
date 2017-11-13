import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

let store = createStore(reducer)
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