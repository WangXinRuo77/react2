import create from './create';
import addEvent from './event';
import './index.css';

const myDiv = create('div');
const clickEvent = (ev)=>{
    const element = ev.target || ev.srcElement;
    element.style.background='blue';
    element.style.color='white';
    document.body.style.background='green';
}
window.onload = function() {
    addEvent(myDiv,'click',clickEvent)
}

