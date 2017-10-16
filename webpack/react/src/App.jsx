import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
	constructor(){
		super()
		this.state = {
			name:'hello react'
		}
	}
	render(){
		return (
			<h1>{this.state.name}</h1>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.querySelector('#app')
)