import myJpg from '../../src/images/12.jpg';
import myPng from '../../src/images/12.png';

var oImg = document.createElement('img');
oImg.width = '200';
oImg.height = '200';
oImg.src = myJpg;
document.body.appendChild(oImg);

var oDiv = document.createElement('div');
oDiv.style.width = '200px';
oDiv.style.height = '200px';
oDiv.style.background = "url("+myPng+")";
oDiv.style.backgroundSize = 'cover';
document.body.appendChild(oDiv)