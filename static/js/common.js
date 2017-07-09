const m ={
	a:1,
	get(){
		return this.a;
	},
	set(value){
		this.a = value;
		console.log(this)
	}
}
export default m;