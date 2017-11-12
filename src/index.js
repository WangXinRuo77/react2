import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'


// ui theme 
import '../ui/default.less';

import 'antd/dist/antd.less';


// iconfont
import '../static/fonts/iconfont.less'

import ComponentHeader from './components/header/header.jsx';
import ComponentFooter from './components/footer/footer.jsx';

import PageIndex from './pages/index/index.jsx';
import PageContest from './pages/contest/index.jsx';
import PageProcedure from './pages/procedure/index.jsx';
import PageProcedureCustomer from '@pages/procedure/customer.jsx';
import PageProcedureDesigner from '@pages/procedure/designer.jsx';

import PageLaunch from './pages/launch/index.jsx';
import PageAbout from './pages/about/index.jsx';  
 

const RouterMap = [
	{
		path:"/",
		component:PageIndex
	},
	{
		path:"/contest",
		component: PageContest
	},
	{
		path: "/procedure",
		component: PageProcedure,
	},
	{
		path: "/launch",
		component: PageLaunch
	},
	{
		path: "/about",
		component: PageAbout
	}
]

const CreateRoute = (route) => (
	<Route path={route.path}  render={props => (
		<route.component { ...props } routes={ route.routes } />
	)} />
) 
// <Route path="/procedure/designer" component={ PageProcedureDesigner } />
// <Route path="/procedure/customer" component={ PageProcedureCustomer } />

ReactDOM.render(
	<Router >
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