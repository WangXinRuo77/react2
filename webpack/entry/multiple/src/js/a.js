import element from '../utils/element';
import addEvent from '../utils/event';
import '../css/a.css'
const divA = element('div');
divA.className = 'a'
const cbA = (ev)=>{
    const element = ev.target||ev.srcElement;
    element.style.background = 'red';
    element.innerHTML = 'You have clicked a element';
    return element;
}

addEvent(divA,'click',cbA)