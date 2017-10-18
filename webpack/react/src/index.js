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
import PageCase from './pages/case/index.jsx';
import PageAbout from './pages/about/index.jsx'; 


ReactDOM.render(
	<Router >
		<div>
			<ComponentHeader />
			<Route exact path="/" component={ PageIndex }></Route>
			<Route path="/contest" component={ PageContest }></Route>
			<Route path="/procedure" component={ PageProcedure }></Route>
			<Route path="/case" component={ PageCase }></Route>
			<Route path="/about" component={ PageAbout }></Route> 
			<ComponentFooter />
		</div>
	</Router>,
	document.querySelector('#app')
)
