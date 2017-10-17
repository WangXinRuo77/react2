import React from 'react';
import './header.less';

 
export default class ComponentHeader extends React.Component {
	constructor(){
		super()
	}
	componentWillMount(){

	} 
	render(){
		return(
			<header className="component-header">
				{/*logo*/}
				<div className="logo" >
						<a href="" >
							i am a logo
						</a>
				</div>
				{/* nav */}
				<nav className="nav">
					<a href="">首页</a>
					<a href="">首页</a>
					<a href="">首页</a>
					<a href="">首页</a>
					<a href="">首页</a>
				</nav>
				{/* unLogin */}
				<ul className="sign">
					<li className="">
						<a href="" >登录</a>
					</li>
					<li className="">
						<a href="" >注册</a>
					</li>
				</ul>
				{/* user */}
				<div className="user">
					<div className="avatar">you have login</div>
				</div>
			</header>
		)
	}
}