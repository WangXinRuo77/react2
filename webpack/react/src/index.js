import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


// ui theme 
import 'antd/dist/antd.css'
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

import PageCase from './pages/case/index.jsx';
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
		path: "/case",
		component: PageCase
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


ReactDOM.render(
	<Router >
		<div>
			<ComponentHeader />
			<Route exact path="/" component={ PageIndex } />
			<Route path="/contest" component={ PageContest } />
			<Route path="/procedure" component={ PageProcedure } />	
			<Route path="/procedure/designer" component={ PageProcedureDesigner } />
			<Route path="/procedure/customer" component={ PageProcedureCustomer } />
			<Route path="/case" component={ PageCase } />
			<Route path="/about" component={ PageAbout } /> 
			<ComponentFooter />
		</div>
	</Router>,
	document.querySelector('#app')
)
