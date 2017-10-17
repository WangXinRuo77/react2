import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export default class ComponentHeader extends React.Component {
	constructor(){
		super()
	}
	componentWillMount(){

	}

	render(){
		return(
				<Header>
					<header className="component-header">
						{/*logo*/}
						<div className="logo" >
								<a href="" >
									<img />
								</a>
						</div>
						{/* nav */}
						<nav>
							<a href="" >首页</a>
							<a href="" >首页</a>
							<a href="" >首页</a>
							<a href="" >首页</a>
							<a href="" >首页</a>
						</nav>
						{/* unLogin */}
						<ul className="">
							<li className="">
								<a href="" >登录</a>
							</li>
							<li className="">
								<a href="" >注册</a>
							</li>
						</ul>
						{/* user */}
						<div className="">
							<div className="avatar">you have login</div>
						</div>
					</header>
				</Header>	
		)
	}
}