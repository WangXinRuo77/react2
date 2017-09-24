import '../../src/css/common.css'
const Dom = class {
    get(selector){
        this.selector = selector;
        this.nodeList = document.querySelectorAll(selector);
        return this;
    }
    set(styles){
        this.nodeList.forEach((item)=>{
            Object.keys(styles).forEach((etem,index)=>{
                item.style[etem] = styles[etem]
            })
        });
        return this;
    }
}
new Dom().get('h1').set({color:'red',border:'1px solid #4ba8c9',textAlign:'center'})
/*
* 编译后代码
* var Dom = function () {
    function Dom() {
        _classCallCheck(this, Dom);
    }

    _createClass(Dom, [{
        key: 'get',
        value: function get(selector) {
            this.selector = selector;
            this.nodeList = document.querySelectorAll(selector);
            return this;
        }
    }, {
        key: 'set',
        value: function set(styles) {
            this.nodeList.forEach(function (item) {
                Object.keys(styles).forEach(function (etem, index) {
                    item.style[etem] = styles[etem];
                });
            });
            return this;
        }
    }]);
* */