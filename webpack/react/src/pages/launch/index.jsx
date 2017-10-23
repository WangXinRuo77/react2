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
								<span className="module-text">账号</span>
								<input type="text" placeholder="邮箱或手机" />
							</div>
							<div className="item">
								<span className="module-text">密码</span>
								<input type="password" placeholder="密码" />
							</div>
						</div>
						<div className="signin hide">
							<div className="item" >
								<span className="module-text">账号</span>
								<input type="text" placeholder="邮箱或手机" />
							</div>
							<div className="item">
								<span className="module-text">密码</span>
								<input type="password" placeholder="密码" />
							</div>
							<div className="item">
								<span className="module-text">确认密码</span>
								<input type="password" placeholder="确认密码" />
							</div>													
						</div>
					</div>
				</div>
				<div className="component-company module-line">
					<h3 className="module-title">公司信息</h3>
					<div className="name">
						<span className="module-text">公司名称</span>
						<input type="text" placeholder="公司名称" />
					</div>
					<div className="area">
						<span className="module-text">行业领域</span>
						<select>
							<option value="">请选择</option>
              <option value="互联网">互联网</option>
              <option value="金融">金融</option>
              <option value="教育培训">教育培训</option>
              <option value="房地产">房地产</option>
              <option value="物流">物流</option>
              <option value="医疗">医疗</option>
              <option value="传媒">传媒</option>
              <option value="汽车">汽车</option>
              <option value="服务">服务</option>
              <option value="咨询">咨询</option>
              <option value="政府">政府</option>
              <option value="农林牧渔">农林牧渔</option>
              <option value="军工">军工</option>
              <option value="消费">消费</option>
              <option value="其他">其他</option>
						</select>
					</div>
					<div className="office">
						<span className="module-text">公司官网(选填)</span>
						<span className="module-prefix">http://</span>
						<input className="module-half-input" type="text" placeholder="输入网址" />
					</div>
					<div className="introduce">
						<span className="module-text">公司介绍</span>
						<textarea placeholder="描述一下您的公司，让设计师更懂你。"></textarea>
					</div>

				</div>
			</main>
		)
	}
}

