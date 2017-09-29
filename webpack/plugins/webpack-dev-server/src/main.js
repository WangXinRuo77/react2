const oDiv = document.createElement('div');

oDiv.style.width = '200px';
oDiv.style.height = '200px';
oDiv.style.margin = '100px auto';
oDiv.style.background = '#4ba8c9';
oDiv.style.textAlign = 'center';
oDiv.innerHTML = 'hello webpack dev server';

document.body.appendChild(oDiv)


oDiv.addEventListener('click', (ev)=>{
	alert(ev.target.tagName)
}, false)