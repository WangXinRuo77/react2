import React from 'react'; 
import './footer.less';
import { Row , Col , Select , Input , Button  } from 'antd';
const InputGroup = Input.Group;
export default class ComponentFooter extends React.Component {
	constructor(){
		super()
	}

	render(){
		const ProjectType = [
			"LOGO/VI设计",
			"海报/宣传册设计",
			"WEB/H5设计",
			"APP设计",
			"产品/包装设计",
			"插画/绘本设计"
		];
		const ProjectTypeList = [];
		ProjectType.forEach((item,index)=>{
			ProjectTypeList.push(	
				<Option key={item}>
					{item}
				</Option>
			)	
		})
		console.log(ProjectTypeList)
		return(
			<footer className="component-footer">
				<Row className="">
					<Col span={16} offset={4}>
						<p>企业有设计需求不知道如何发布竞赛？留下联系方式让精于协助你。</p>
						<InputGroup className="helper" compact>
							<Select style={{ width: "17%"}}  defaultValue="项目类型">
								{ProjectTypeList}
							</Select>
							<Input style={{ width: "25%"}} type="text" placeholder="你的手机号或邮箱" />
							<Button >提交</Button> 
						</InputGroup>
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