import React from 'react';

import "@style/page_launch_index.less"; 

export default class Case extends React.Component {
	constructor(){
		super()
		this.state = {
		}
	}

	render(){
		return (
			<main className="page-launch">	
				<h1 className="title">发布赛事，精于帮你找到满意的设计</h1>
				<div className="component-account">
					<nav className="nav">
						<a className="item item-active">已有账号</a>
						<a className="item">没有账号</a>
					</nav>
					<div className="user">
						<div className="signup">
							<div className="item" >
								<span className="text">账号</span>
								<input type="text" placeholder="邮箱或手机" />
							</div>
							<div className="item">
								<span className="text">密码</span>
								<input type="password" placeholder="密码" />
							</div>
						</div>
						<div className="signin hide">
							<div className="item" >
								<span className="text">账号</span>
								<input type="text" placeholder="邮箱或手机" />
							</div>
							<div className="item">
								<span className="text">密码</span>
								<input type="password" placeholder="密码" />
							</div>
							<div className="item">
								<span className="text">确认密码</span>
								<input type="password" placeholder="确认密码" />
							</div>													
						</div>
					</div>
				</div>
			</main>
		)
	}
}

