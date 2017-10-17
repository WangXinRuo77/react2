import React from 'react';
import ComponentHeader from './components/header/header.jsx';
import ComponentFooter from './components/footer/footer.jsx';

import Message from './plugins/message/message.jsx';
import { Layout } from 'antd';
import  regexp  from './utils/regexp';
// ui theme 
import 'antd/dist/antd.css'
import '../ui/default.less';

// iconfont

import '../static/fonts/iconfont.css'

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			name:'hello react'
		}
	}

	render(){
		return (
			<main>
				<ComponentHeader />
				<h1 style={{height:'600px'}}>{this.state.name}</h1>				
				<ComponentFooter />
			</main>
		)
	}
}

