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
	handleSubmit(e){
		e.preventDefault();
		this.props.form.valide
	}	
	render(){
    const { getFieldDecorator } = this.props.form;

    const LoginFrom = Form.create(
    	<Form onSubmit={ this.handleSubmit }>
	       <FormItem label="E-mail" hasFeedback>
	          {
	          	getFieldDecorator('email', {
		            rules: [
			            {
			              type: 'email', message: 'The input is not valid E-mail!',
			            }, 
			            {
			              required: true, message: 'Please input your E-mail!',
			            }
		            ],
		          })( <Input /> )
	        	}
	        </FormItem>
    	</Form>
    )

		return (
			<main className="page-launch">
				<h1 className="title">发布赛事，精于帮你找到满意的设计</h1>
				<Tabs defaultActiveKey="1" onChange={ this.Switch }>
			    <TabPane tab="Tab 1" key="1">
			    	<LoginFrom />
			    </TabPane>
			    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>			
			  </Tabs>
			</main>
		)
	}
}
