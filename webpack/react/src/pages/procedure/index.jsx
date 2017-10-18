import React from 'react';
 

export default class Procedure extends React.Component {
	constructor(){
		super()
		this.state = {
			name:'hello Procedure'
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

