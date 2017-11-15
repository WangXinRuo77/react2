import React from 'react';
import { Row , Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '@style/component_header.less';

import IMGLogo from '../../../static/images/logo.jpg'
class ComponentHeader extends React.Component {
	constructor(){
		super();
		this.state = {
			path:'home',
			markerMap:{
					home:28,
					contest:137,
					procedure:265,
					launch:387,
					about:491,
			}
		}
	}
	componentWillMount(){

	} 
	updateMarkerLeft(ev){
		let currentPathNode = ev.target; 
		
		if(currentPathNode.nodeName.toLowerCase() == 'hr') return;

		while (currentPathNode.nodeName.toLowerCase() !== 'a') {
			currentPathNode = currentPathNode.parentNode;
		}

		const currentPath =currentPathNode.getAttribute('data-marker');
		
		if(currentPath == this.state.path) return;
		
		this.setState({
			path:currentPath
		})
	}
	render(){
		var HasUser = this.props.user.id ? true :false;
		return(
			<header className="component-header">
				<Row>
					<Col span={24}>
						<div className="header-abs">
							{/* nav */}
							<div className="nav">
								{/* link */}
								<nav className="link" onMouseOver={this.updateMarkerLeft.bind(this)}>
									<Link data-marker="home" className="link-item" to="/">
										<span className="nav-text-zh">首页</span>
										<span className="nav-text-en">HOME</span>
									</Link>
									<Link data-marker="contest"  className="link-item" to="/contest">
										<span className="nav-text-zh">竞赛</span>
										<span className="nav-text-en">CONTEST</span>
									</Link>
									<Link data-marker="procedure"  className="link-item" to="/procedure">
										<span className="nav-text-zh">流 程</span>
										<span className="nav-text-en">PROCEDURE</span>
									</Link>
									<hr className="marker" style={{'left':this.state.markerMap[this.state.path]+'px'}}/>
								</nav>			
								{/* unLogin */}
								<div className="sign" style={{ "display" : HasUser?"none":"flex" }}>
									<Link className='sign-link' to="/login" >
										<span className="nav-text-zh">登录</span>
										<span className="nav-text-en">SIGN IN</span>
									</Link>
									<Link className='sign-link sign-up' to="/register" >
										<span className="nav-text-zh">注册</span>
										<span className="nav-text-en">SIGN UP</span>
									</Link>
								</div>						
								{/* user */}
								<div className="user" style={{ "display" : HasUser?"flex":"none" }}>
									<div className="avatar">you have login</div>
								</div>																
							</div>
							{/* logo */}									
							<div className="logo">
								<a href="/" >
									<img src={IMGLogo} />
								</a>	
							</div>	
						</div>					
					</Col>
				</Row>
				<Row className="hide">
					<Col>
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
const getUserInfo = state =>{
	return {
		user:state.user
	}
}
export default connect(getUserInfo)(ComponentHeader)