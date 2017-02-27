const now = ()=> new Date().toLocaleString();
console.log(now());

const obj = {
	name(){
		this.name ='beijing'
	},
	age(){
		this.age = 12;
	}
}
console.log(obj)