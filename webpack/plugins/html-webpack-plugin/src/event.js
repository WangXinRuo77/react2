export default function addEvent(){
	document.body.addEventListener('click', (ev)=>{
		alert(ev.target.tagName);
		console.log(ccc)
	}, false)
}