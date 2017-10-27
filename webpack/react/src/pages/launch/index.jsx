import React from 'react';
import { Tabs, Form  } from 'antd';

import "@style/page_launch_index.less"; 

import Validate from '@utils/regexp.js'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
export default class Case extends React.Component {
	constructor(){
		super()
		this.state = {

		}
	}
	componentDidMount() {
		// disabled submit button at beginning
		// this.props.form.validateFields();
	}
	Switch(){

	}
	render(){
		return (
			<main className="page-launch">
				<h1 className="title">发布赛事，精于帮你找到满意的设计</h1>
				<Tabs defaultActiveKey="1" onChange={ this.Switch }>
			    <TabPane tab="Tab 1" key="1">
			    	<Form>
			    		<FormItem></
			    	</Form>
			    </TabPane>
			    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>			
			  </Tabs>
			</main>
		)
	}
}
