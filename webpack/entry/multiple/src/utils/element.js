export default function create (tag){
    const myElement = document.createElement(tag);
    document.body.appendChild(myElement);
    return myElement;
}