import React from 'react';
import ReactDOM from 'react-dom';

import ComponentHeader from './components/header.jsx';
import ComponentFooter from './components/footer.jsx';

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
				<ComponentFooter />
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.querySelector('#app')
)