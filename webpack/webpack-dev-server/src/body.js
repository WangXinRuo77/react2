import React from 'react';
import ReactDOM from 'react-dom';

export default class PageIndex extends React.Component {
	constructor(){
		super();
		this.state = {
			second:0
		}
	} 
	addSecond(){
		var nextSecond = this.state.second+1;
		this.setState({
			second:nextSecond
		})
	}
	render(){
		return(
			<h1>
				this is index page!
				<br/>
				Click <span style={{color:'red',cursor:"pointer"}} onClick={this.addSecond.bind(this)}>Here</span> to Add seconds!
				{this.state.second} seconds!
			</h1>
		)
	}
}