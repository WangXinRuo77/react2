export default function createElement(nodeName) {
    const oDiv = document.createElement(nodeName);
    oDiv.innerHTML ='点击div变色：来自event.js的提示';
    document.body.appendChild(oDiv);
    return oDiv;
}