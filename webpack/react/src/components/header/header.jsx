import React from 'react';
import { Row , Col } from 'antd';



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
				<Row>
					<Col span={24}>
						<div className="header-abs">
							{/* nav */}
							<nav className="nav">
								<a className="nav-item" href="">
									<span className="nav-text-zh">首页</span>
									<span className="nav-text-en">HOME</span>
								</a>
								<a className="nav-item" href="">
									<span className="nav-text-zh">竞赛</span>
									<span className="nav-text-en">CONTEST</span>
								</a>
								<a className="nav-item" href="">
									<span className="nav-text-zh">流程</span>
									<span className="nav-text-en">PROCEDURE</span>
								</a>
								<a className="nav-item" href="">
									<span className="nav-text-zh">发布</span>
									<span className="nav-text-en">LAUNCH</span>
								</a>
								<a className="nav-item" href="">
									<span className="nav-text-zh">关于</span>
									<span className="nav-text-en">ABOUT</span>
								</a>
							</nav>
							{/* unLogin */}
							<div className="sign">
								<a className='sign-link' href="" >
									<span className="nav-text-zh">登录</span>
									<span className="nav-text-en">SIGN IN</span>
								</a>
								<a className='sign-link sign-up' href="" >
									<span className="nav-text-zh">注册</span>
									<span className="nav-text-en">SIGN UP</span>
								</a>
							</div>
							{/* user */}
							<div className="user hide">
								<div className="avatar">you have login</div>
							</div>
						</div>
						<div className="header-fix hide">
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
							<div className="sign">
								<a className='sign-link' href="" >登录</a>
								<a className='sign-link' href="" >注册</a>
							</div>
							{/* user */}
							<div className="user">
								<div className="avatar">you have login</div>
							</div>				
						</div>						
					</Col>
				</Row>

			</header>
		)
	}
}