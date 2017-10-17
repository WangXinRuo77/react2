import React from 'react';
import { DatePicker } from 'antd';
export default class ComponentFooter extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<DatePicker />
			</div>
		)
	}
}