import React from 'react';
import devPath from '../utils/path.js';
import getImage from '../utils/getImage.js';

export default class ComponentHeader extends React.component {
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
					<h1>
						<a href="" >
							<img src={getImage('/images/logo.jpg')}/>
						</a>
					</h1>
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
		)
	}
}