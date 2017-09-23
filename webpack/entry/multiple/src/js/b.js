import element from '../utils/element';
import addEvent from '../utils/event';
import '../css/b.css';

const divB = element('div');
divB.className = 'b'


const cbB = (ev)=>{
    const element = ev.target||ev.srcElement;
    element.style.background = 'green';
    element.innerHTML = 'You have clicked B element';
    return element;
}
addEvent(divB,'click',cbB)