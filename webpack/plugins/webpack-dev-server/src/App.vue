<template>
	<div class="component-app" id="componentApp">
		<p>{{ message }}</p>
		<input type="text" v-model="message" name="">
	</div>
</template>
<script>
	export default {
		data(){
			return{
				message:"hello webpack-dev-server"
			}
		}
	}
</script>