
document.addEventListener('click', (ev)=>{
	const docEle = ev.target || ev.srcElement;
	let color = parseInt(Math.random()*1000000);
	docEle.style.background = '#'+color;
	document.body.innerHTML = color;
}, false)
