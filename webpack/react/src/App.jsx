import React from 'react';
import ReactDOM from 'react-dom';

import ComponentHeader from './components/header.jsx';

class Index extends React.Component {
	constructor(){
		super()
		this.state = {
			name:'hello react'
		}
	}

	render(){
		return (
			<div>
				<ComponentHeader />
				<h1>{this.state.name}</h1>				
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.querySelector('#app')
)