import React from 'react';
 

export default class Index extends React.Component {
	constructor(){
		super()
		this.state = {
			name:'hello index'
		}
	}

	render(){
		return (
			<main>
				<h1 style={{height:'600px'}}>{this.state.name}</h1>		
			</main>
		)
	}
}

