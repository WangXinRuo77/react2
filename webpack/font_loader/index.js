import './iconfont.css';

const createElement = ()=>{
	const elementStr =  "<div>"+
												"<i class='icon icon-zan'></i>"+
												"<i class='icon icon-diannao'></i>"+
												"<i class='icon icon-shouji'></i>"+
											"</div>";
	const ele = document.createElement('div');
	ele.innerHTML = elementStr;
	return ele;
}
document.body.appendChild(createElement())