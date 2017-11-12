import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

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

ReactDOM.render(
	<Router>
		<div>
			<ComponentHeader />
			<Route exact path="/" component={ PageIndex } />
			<Route path="/contest" component={ PageContest } />
			<Route path="/procedure" component = { PageProcedure} />	
			<Route path="/launch" component={ PageLaunch } />
			<Route path="/about" component={ PageAbout } /> 			
			<ComponentFooter />
		</div>
	</Router>,
	document.querySelector('#app')
)