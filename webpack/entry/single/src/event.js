export default function addEvent(element,type,handler){
    console.log(element);
    element.addEventListener(type,handler,false)
}