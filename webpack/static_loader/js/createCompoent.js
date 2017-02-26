const createComp = ()=>{
	const oDiv = document.createElement('div');
	oDiv.innertHTML = 'created by createCompoent.js';
	document.body.appendChild(oDiv)
};
export default createComp;