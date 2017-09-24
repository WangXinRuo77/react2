
import '../../src/css/common.css'
import '../../src/less/index.less';
import '../../src/sass/index.sass';
import '../../src/scss/index.scss';
import '../../src/stylus/index.styl';

const  preArr = ['sass','scss','less','styl'];
const create = (item)=>{
    const oText = document.createElement('h1');
    oText.innerHTML = "this is "+item+" text node";
    oText.className = 'text-center fs-40 mt-10 '+item;
    document.body.appendChild(oText)
}
preArr.forEach((item,index)=>{
    create(item)
})