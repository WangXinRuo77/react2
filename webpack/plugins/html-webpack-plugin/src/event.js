export default function addEvent(){
	document.body.addEventListener('click', (ev)=>{
		alert(ev.target.tagName)
	}, false)
}