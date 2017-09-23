export default function addEvent(element,type,handler){
    element.addEventListener(type,handler,false)
}