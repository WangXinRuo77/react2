import React from 'react'; 
import './footer.less';
import { Row , Col , Select , Input , Button , Popover  } from 'antd';
const InputGroup = Input.Group;
export default class ComponentFooter extends React.Component {
	constructor(){
		super()
	}

	render(){
		//
		const ProjectType = ["LOGO/VI设计","海报/宣传册设计","WEB/H5设计","APP设计","产品/包装设计","插画/绘本设计"];
		const ProjectTypeList = [];
		ProjectType.forEach((item,index)=>{
			ProjectTypeList.push(	
				<Select.Option key={item}>
					{item}
				</Select.Option>
			)	
		});

		const WxTipContent = (
			<div  className="wx-tip">
				<p className="mb10">精于微信公众号</p>
				<img width="128" height="128" />
			</div>
		)
 
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
							<ol className="third-list">
								<li className="third-item rel mr30">
									<Popover content={WxTipContent}>
										<i className="icon iconfont">&#xe603;</i>
									</Popover>
								</li>
								<li className="third-item mr30">
									<a href="">
										<i className="icon iconfont">&#xe604;</i>
									</a>							
								</li>
								<li className="third-item">
									<a href="">
										<i className="icon iconfont">&#xe60a;</i>
									</a>							
								</li>

							</ol>
						</div>
						<div className="terms">
							<a className="term-item" href="">用户帮助</a>
							<a className="term-item" href="">实名认证</a>
							<a className="term-item" href="">隐私条款</a>
							<a className="term-item" href="">免责条款</a>
						</div>
						<div className="contract">
							<div className="mt25">
								<a href="" className="mr40">设计师使用咨询：010-65571901</a>					
								<a href="">设计师客服邮箱：service@whalesdesign.com</a>								
							</div>
							<div className="mt25">
								<a href="" className="mr40">企业有设计需求：400-133-7446</a>
								<a href="">企业需求服务邮箱：sales@whalesdesign.com</a>								
							</div>
						</div>
						<p className="copyright">
							<span className="fc9">©2016 琢磨琢磨科技(北京)有限公司版权所有</span>
							<span className="fc9">京ICP备16065657号-1</span>
						</p>
					</Col>
				</Row>
			</footer>
		)
	}
}