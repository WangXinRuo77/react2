import React from 'react'; 
import { Row , Col } from 'antd';

export default class ComponentFooter extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<footer className="component-footer">
				<Row className="pd150">
					<Col span={16} offset={4}>
						<p>企业有设计需求不知道如何发布竞赛？留下联系方式让精于协助你。</p>
						<div className="helper">
							<select>
								<option>a</option>
								<option>a</option>
								<option>a</option>
							</select>
							<input type="text" placeholder="你的手机号或邮箱" />
							<button className="button button-dark">提交</button>
						</div>
						<div className="third">
							<p>关注精于设计</p>
							<ol>
								<li>
									<i className="icon iconfont"></i>
									<div className="wx-tip">
										<p>精于微信公众号</p>
										<img />
									</div>
								</li>
								<li>
									<a href="">
										<i className="icon iconfont"></i>
									</a>							
								</li>
								<li>
									<a href="">
										<i className="icon iconfont"></i>
									</a>							
								</li>

							</ol>
						</div>
						<ol className="terms">
							<li><a href="">用户帮助</a></li>
							<li><a href="">实名认证</a></li>
							<li><a href="">隐私条款</a></li>
							<li><a href="">免责条款</a></li>
						</ol>
						<ol className="contract">
							<li><a href="">设计师使用咨询：010-65571901</a></li>					
							<li><a href="">设计师客服邮箱：service@whalesdesign.com</a></li>
							<li><a href="">企业有设计需求：400-133-7446</a></li>
							<li><a href="">企业需求服务邮箱：sales@whalesdesign.com</a></li>
						</ol>
						<p>©2016 琢磨琢磨科技(北京)有限公司版权所有京ICP备16065657号-1</p>
					</Col>
				</Row>
			</footer>
		)
	}
}