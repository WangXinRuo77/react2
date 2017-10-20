import React from 'react';
import { Link } from 'react-router-dom'
import '@style/page_contest_index.less';

export default class Contest extends React.Component {
	constructor(){
		super()
		this.state = {
			name:'hello contest'
		}
	}

	render(){
		return (
			<main className="page-contest">
				<div className="component-banner">
					<div className="wrapper">
						<div className="container">
							<div className="sort">
								排序:<span className="item active" data-sort-type="1">初赛截止</span><span className="item" data-sort-type="2">作品数量</span><span className="item" data-sort-type="3">赛事金额</span>
							</div>
							<a className="deploy">企业发布赛事<i className="icon iconfont">&#xe615;</i></a>
						</div>
					</div>
				</div>
				<div className="component-contest">
					<div className="container clearfix">
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>
						<div className="contest">
							<Link to="/">
								<img src="/static/images/tpl-banner.jpg" width="225" height="150" className="thumb" />
								<p className="title">真格基金</p>
								<div className="panel">
									<span>LOGO设计</span>
									<span>征稿中</span>
								</div>
								<p className="award">总奖金30000RMB</p>
								<p className="winner">10人</p>
								<p className="lefttime">距离初赛截稿 15 天</p>
								<div className="data">
									<span className="item"><i className="icon iconfont">&#xe622;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe61b;</i>12345</span>
									<span className="item"><i className="icon iconfont">&#xe627;</i>12345</span>
								</div>
							</Link>
						</div>

					</div>
					<div className="more">
						<a className="btn btn-large">
							更多赛事<span className="btn-en">/ALL</span><i className="icon iconfont btn-icon">&#xe615;</i>
						</a>
					</div>
				</div>
			</main>
		)
	}
}

