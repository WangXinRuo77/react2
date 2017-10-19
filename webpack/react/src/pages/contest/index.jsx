import React from 'react';
import './index.less';

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
				<div className="contests">
					<ul></ul>
					<a className="btn btn-all">
						更多赛事<span className="btn-en">/All</span><i className="icon iconfont">&#xe615;</i>
					</a>
				</div>
			</main>
		)
	}
}

