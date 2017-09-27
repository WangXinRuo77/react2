<template>
	<div class="component-app" id="componentApp">
		<p >{{ message }}</p>
		<input type="text" v-model="message" name="">
		<br/>
		<input type="button" class="btn" value="showMessage" @click="showMessage">
	</div>
</template>
<script>
	export default {
		data(){
			return{
				message:"hello webpack-dev-server"
			}
		},
		created(){
		},
		methods:{
			showMessage(){
				alert(this.message)
			}
		}
	}
</script>
<style>
	body
	{
		margin:0;padding: 0;
		text-align: center;
	}
	input,
	.btn
	{
		padding:8px 15px;
		border:1px solid #ddd;
		display: inline-block;
		border-radius: 5px;
		background: #fff;
	}
	p{
		font-size: 14px;
		margin:0;
		padding:0;
		margin:1em 0;
	}
</style>