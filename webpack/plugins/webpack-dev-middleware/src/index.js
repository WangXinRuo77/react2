import color from './color';

import './color.css'

document.body.addEventListener('click', function(ev){
	ev.target.style.background = color();

}, false)